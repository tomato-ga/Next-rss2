import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RelatedTagPosts from '@/components/RelatedTagPosts';
import Comment from '@/components/Comment';
import Tags from '@/components/Tags';
import Link from 'next/link';
import FetchClickCounts from '@/components/Clickcount';


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
    return <p>Loading...</p>;
  }

  // 関数の定義など、必要に応じてコードを追加

  return (
    <div>
        <Header />
        <div className='container mx-auto px-4 py-6 flex flex-col-reverse md:flex-row'>
            <Sidebar />
            <div className='md:w-3/4 md:ml-4'>
                <h1 className="m-2 text-xl md:text-4xl font-bold text-blue-600 border-b pb-2">{data[0].title}</h1>

                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='desc p-5'>
                        {<img src={data[0].imgurl}></img>}


                    </div>

                    <div className='p-2 md:p-4'>
                    </div>
                </div>

                <div className='text-2xl bg-blue-700 text-white text-center font-semibold hover:bg-orange-700 rounded-md'>
                    <h3><a href={data[0].link} target='_blank'>{data[0].title}のページを見る</a></h3>
                </div>

              </div>
              </div>
              </div>
);
};

export default Posts;
