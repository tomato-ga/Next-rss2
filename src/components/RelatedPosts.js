import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tags from './Tags';

const RelatedPosts = ({ tag }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch(`http://192.168.0.25:7002/rss/tag/${tag}`);
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
                <div className="p-4">
                    <Link href="/[siteId]/[itemId]" as={`/${post.site_id}/${post.id}`}>
                    <img src={post.imgurl} className="max-h-[200px]" alt={post.title} />
                    <p className="text-blue-500 hover:text-blue-700">{post.title}</p>
                    </Link>
                    <Tags tagsArray={tagsArray} />
                </div>
                </div>
            )
            })}
      </div>
    </div>
  );


};

export default RelatedPosts;
