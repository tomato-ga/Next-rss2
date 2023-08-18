import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tags from './Tags';
import Image from 'next/image';
import styles from './iiim.module.css'
import FetchClickCounts from './Clickcount';
import { handleClickCount } from '@/lib/clickCountDB';


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
                    <Link href="/[siteId]/[itemId]" as={`/${post.site_id}/${post.id}`}>


                    <div className="relative h-[270px] w-full md:h-[320px] md:w-full">
                        <img src={post.imgurl} className="w-full h-full object-cover" alt={post.title} />

                        <span className="absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1">
                            <FetchClickCounts itemId={post.id} />
                        </span>
                    </div>
                    {/* <div className="relative h-[170px] w-full md:h-[320px] md:w-full">

                    <Image fill src={post.imgurl} className={styles.image} alt={post.title} sizes="(max-width: 600px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw"/>
                    <FetchClickCounts itemId={post.id}/> 

                    </div> */}
                    <p className="m-2 text-sm md:text-xl font-bold text-blue-600">{post.title}</p>
                    </Link>
                    <Tags tagsArray={tagsArray} numberTags={5} />
                </div>
                </div>
            )
            })}
      </div>
    </div>
  );


};

export default RelatedTagPosts;
