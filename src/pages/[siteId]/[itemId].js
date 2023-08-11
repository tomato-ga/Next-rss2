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



// TODO contextのitemidから確認する
export async function getServerSideProps(context) {
  const { siteId, itemId } = context.params;
  const ENDP = `http://192.168.0.25:7002/sites/rss/${itemId}`;
  const res = await fetch(ENDP);
  const data = await res.json();

  // タグの分割
  const tags = data[0]?.tag.split(',');

  return {
    props: {
      data,
      tags,
    }
  };
}

const Posts = ({ data }) => {
  if (!data) {
    return <p>ロード中です。もしかしたらデータないかも</p>;
  }

  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    let savedArticles = JSON.parse(localStorage.getItem('articleData')) || [];

    const isArticleExist = savedArticles.some(article => article[0].id === data[0].id);

    if (!isArticleExist) {
      if (savedArticles.length === 500) {
        savedArticles.pop(); // 末尾の要素を削除
      }
    
      savedArticles.unshift(data); // 先頭に追加
      localStorage.setItem('articleData', JSON.stringify(savedArticles));
    }

    const checkSavedArticles = () => {
      let savedbrowserArticles = JSON.parse(localStorage.getItem('articleData')) || [];
      if (savedbrowserArticles) {
        setLocalData(savedbrowserArticles);
      } else {
        return false;
      }
    };

    checkSavedArticles(); // 関数の呼び出し位置を修正
  }, [data]);

  let tags = data[0].tag.split(',');

  return (
    <div>
        <Header />
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

                    <div className='p-2 md:p-4'>
                    </div>
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
    </div>
);
};


export default Posts;
