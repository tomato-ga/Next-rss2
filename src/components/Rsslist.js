import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import shuffle from '@/lib/shuffle';

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
        console.log(shuffledItems);

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
    <div className='container mx-auto flex p-5'>
      <div className='border border-gray-300 rounded-lg shadow-lg p-4 flex-grow-0 w-1/3'>
        <h2 className='text-2xl mb-4'>Sidebar</h2>
        <p><a href='/ssr'>SSR</a></p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5">
        {rssItems.map((item, index) => {
          const date = new Date(item.published_at);
          const formattedDate = new Intl.DateTimeFormat('ja-JP', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
          }).format(date);
          return (
            <div key={index} className='my-1 px-4 border-gray-300 rounded-lg shadow-lg'>
              {/* <h1 className='text-2xl py-6 text-center bg-indigo-800 text-white'>{item.siteName}</h1> */}
              <div className='border-b border-gray-200'>
              <Link href="/[siteId]/[itemId]" as={`/${item.site_id}/${item.id}`}>
                <img src={item.imgurl} className='max-h-[250px]'></img>
                {/* <a href={item.link} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:text-blue-700'> */}
                  <h2 className='m-3 text-xl'>
                    {item.title}
                  </h2>
                {/* </a> */}
                  {/* <div className="text-right"><button>詳細</button></div> */}
                </Link>
                <div className='date px-2 align-sub text-gray-500'>
                  <p>{formattedDate}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RSSList;
