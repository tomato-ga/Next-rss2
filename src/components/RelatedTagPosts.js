import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tags from './Tags';
import Image from 'next/image';
import styles from './iiim.module.css'
import FetchClickCounts from './Clickcount';
import { handleClickCount } from '@/lib/clickCountDB';
import Favthumbnail from './Favthumbnail';


const RelatedTagPosts = ({ tag }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch(`https://api.erorice.com/tag?tag=${tag}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRelatedPosts();
  }, [tag]);

  if (!posts.length) {
    return null;
  }

  return (
    <div>
      <div className='mt-5 mb-3 p-2 font-bold text-2xl bg-slate-400 text-black'>
      <h2>「{tag}」の関連動画</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-1">
      {posts.map((post) => {
            const tagsArray = post.tag.split(',').map(tag => tag.trim());
            return (
                <div key={post.id} className="border-gray-300 rounded-lg shadow-lg">
                  <div onClick={() => { handleClickCount(post.id) }}>
                  <div className="h-[270px] w-full md:h-[320px] md:w-full">
                                    <Link href="/item/[items]" as={`/item/${post.id}`} className=''>
                                        <img src={post.imgurl} className="w-full h-full object-cover" alt={post.title} />
                                    </Link>
                                </div>

                                <div className='relative flex items-center mt-2'>
                                    <div className='flex flex-col items-center'>
                                        <span className="text-red-600 text-xl font-bold tracking-widest text-center p-2">
                                            <FetchClickCounts itemId={post.id} />
                                        </span>

                                        <span className="text-red-600 text-xl font-bold tracking-widest text-center p-2">
                                            <Favthumbnail postId={post.id} articleData={post}/>
                                        </span>
                                    </div>

                                    <div className='ml-4'>
                                        <Link href="/item/[items]" as={`/item/${post.id}`} className=''>
                                            <h2 className='text-sm md:text-xl font-bold text-blue-600 z-20'>
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <div className='tags'>
                                            <Tags tagsArray={tagsArray} numberTags={5} />
                                        </div>
                                    </div>
                                </div>
                </div>
                </div>
            )
            })}
      </div>
    </div>
  );
};

export default RelatedTagPosts;
