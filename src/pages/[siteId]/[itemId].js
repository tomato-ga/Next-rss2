import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RelatedTagPosts from '@/components/RelatedTagPosts';
import Comment from '@/components/Comment';
import Tags from '@/components/Tags';
import Link from 'next/link';
import FetchClickCounts from '@/components/Clickcount';
import Localrireki from '@/components/Localrireki';
import { handleClickCount } from '@/lib/clickCountDB';
import Fav from '@/components/Favs';
import { handleFavCount } from '@/lib/clickCountDB';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import { NextSeo } from 'next-seo';

export async function getServerSideProps(context) {
  const { siteId, itemId } = context.params;
  const ENDP = `https://api.erorice.com/sites/rss/${itemId}`;
  const res = await fetch(ENDP);
  const data = await res.json();

  const tags = data[0]?.tag.split(',');

  return {
    props: {
      data,
      tags,
    }
  };
}

const Posts = ({ data }) => {

  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    if (!data) return;

    let savedArticles = JSON.parse(localStorage.getItem('articleData')) || [];
    let currentTime = new Date().toISOString();
    let newDataWithTimestamp = { ...data[0], timestamp: currentTime };
    const isArticleExist = savedArticles.some(article => article[0].id === newDataWithTimestamp.id);

    if (isArticleExist) {
      savedArticles = savedArticles.filter(article => article[0].id !== newDataWithTimestamp.id);
    }

    if (savedArticles.length === 500) {
      savedArticles.pop();
    }

    savedArticles.unshift([newDataWithTimestamp]);
    localStorage.setItem('articleData', JSON.stringify(savedArticles));

    const checkSavedArticles = () => {
      let savedbrowserArticles = JSON.parse(localStorage.getItem('articleData')) || [];
      savedbrowserArticles.sort((a, b) => new Date(b[0].timestamp) - new Date(a[0].timestamp));
      if (savedbrowserArticles) {
        setLocalData(savedbrowserArticles);
      }
    };

    checkSavedArticles();
  }, [data]);

  if (!data) {
    return <p>ロード中です。もしかしたらデータないかも</p>;
  }

  let tags = data[0].tag.split(',');

  return (
    <div>
      <NextSeo 
        title={data[0].title}
        description={data[0].description} 
        canonical={`http://localhost:3000/${data[0].site_id}/${data[0].id}`}
      />
      <Header />
      <SearchBar />

      <div className='container mx-auto px-4 py-6 flex flex-col-reverse md:flex-row'>
          <Sidebar />
          <div className='md:w-3/4 md:ml-4 overflow-hidden'>
              <h1 className="m-2 text-xl md:text-4xl font-bold text-blue-600 border-b pb-2">{data[0].title}</h1>
              <div className='grid md:grid-cols-2 gap-2'>
                  <div className='desc p-5'>
                      {<img src={data[0].imgurl}></img>}
                  </div>
                  <div className='p-2 md:p-4'>
                    <Tags tagsArray={tags} numberTags={20}/>
                    <Fav postId={data[0].id} articleData={data} />
                  </div>
                  <div className='p-2 md:p-4'></div>
              </div>
              <div className='text-2xl bg-blue-700 text-white text-center font-semibold hover:bg-orange-700 rounded-md'>
                  <h3><a href={data[0].link} target='_blank'>{data[0].title}のページを見る</a></h3>
              </div>
              <div className='mt-5 mb-3 p-2 font-bold text-2xl bg-slate-400 text-black'>
                      <h2>最近チェックした動画</h2>
              </div>
              <div className="relative">
                  <Localrireki localData={localData} />
              </div>
              <RelatedTagPosts tag={tags[0]} />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Posts;
