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
        const response = await fetch(`http://119.106.61.124:7002/tag?tag=${tag}`);
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
      <div className="grid grid-cols-2 gap-5">
      {posts.map((post) => {
            const tagsArray = post.tag.split(',').map(tag => tag.trim());
            return (
                <div key={post.id} className="border border-gray-300 rounded-lg shadow-lg">
                    <Link href="/[siteId]/[itemId]" as={`/${post.site_id}/${post.id}`}>
                <div className="p-4 relative">
                    <Image fill src={post.imgurl} className={styles.image} alt={post.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                    <p className="text-blue-500 hover:text-blue-700">{post.title}</p>
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