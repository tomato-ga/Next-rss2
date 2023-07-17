import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import shuffle from '@/lib/shuffle';
import Sidebar from './Sidebar';
import Tags from './Tags';

const RSSList = () => {
  const [rssItems, setRSSItems] = useState([]);

  useEffect(() => {
    const fetchRSSItems = async () => {
      try {
        const responseSites = await fetch('http://192.168.0.25:7002/rss');
        const sites = await responseSites.json();

        const promises = sites.map(async (site) => {
          const response = await fetch(`http://192.168.0.25:7002/sites/${site.id}/rss/latest`);
          const data = await response.json();

          return data.map(item => ({ ...item, siteName: site.name, siteCreatedAt: site.created_at }));
        });

        let combinedRSSItems = await Promise.all(promises);
        combinedRSSItems = combinedRSSItems.flat();

        // シャッフル実行
        const shuffledItems = shuffle(combinedRSSItems);

        setRSSItems(shuffledItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRSSItems();
  }, []);

  // RSSItemsが空の場合は何も表示しない
  if (!rssItems.length) {
    return null;
  }

  return (
    <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
        <Sidebar />
        <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5 order-2 md:order-2">
            {rssItems.slice(0, 20).map((item, index) => {
                const date = new Date(item.published_at);
                const formattedDate = new Intl.DateTimeFormat('ja-JP', {
                    year: 'numeric', month: '2-digit', day: '2-digit',
                    hour: '2-digit', minute: '2-digit', second: '2-digit'
                }).format(date);
                const tagsArray = item.tag.split(',').map(tag => tag.trim()); // <--- タグを分割
                return (
                    <div key={index} className='my-1 px-4 border-gray-300 rounded-lg shadow-lg'>
                        <div className='border-b border-gray-200 m-3'>
                            <Link href="/[siteId]/[itemId]" as={`/${item.site_id}/${item.id}`}>
                                <img src={item.imgurl} className='max-h-[250px]'></img>
                                <h2 className='m-3 text-xl'>
                                    {item.title}
                                </h2>
                            </Link>
                            <div className='tags'>
                              <Tags tagsArray={tagsArray}/>
                              {/* {tagsArray.map((tag, tagIndex) => (
                                  <Link key={tagIndex} href="/tag/[tagpage]" as={`/tag/${tag}`}>
                                    <span className='px-1.5 text-blue-500'>
                                    {tag}
                                    </span>
                                  </Link>
                              ))} */}
                            </div>
                            <div className='date px-2 align-sub text-gray-500'>
                                <p>{formattedDate}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className='order-3 hidden md:block flex-grow' />
    </div>
);


};

export default RSSList;