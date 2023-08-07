import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tags from './Tags';
import Image from 'next/image';
import styles from './iiim.module.css'

const RelatedTagPosts = ({ tag }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch(`http://192.168.0.25:7002/tag?tag=${tag}`);
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
      <h2>「{tag}」の関連動画</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {posts.map((post) => {
            const tagsArray = post.tag.split(',').map(tag => tag.trim());
            return (
                <div key={post.id} className="border border-gray-300 rounded-lg shadow-lg">
                    <Link href="/[siteId]/[itemId]" as={`/${post.site_id}/${post.id}`}>
                <div className="relative h-[230px] md:h-[320px]">
                    <Image fill src={post.imgurl} className={styles.image} alt={post.title} sizes="(max-width: 600px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw"/>
                </div>
                    <p className="m-2 text-xl font-bold text-blue-600">{post.title}</p>
                    </Link>
                    <Tags tagsArray={tagsArray} />
                </div>
            )
            })}
      </div>
    </div>
  );


};

export default RelatedTagPosts;

// TODO クリックカウント関数をコピーして持ってきて表示する