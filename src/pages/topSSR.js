// /Volumes/SSD_1TB/next-antena2/front/src/pages/topSSR.js

import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/iiim.module.css'
import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';
import Pagination from '@/components/Pagination';
import { handleClickCount } from '@/lib/clickCountDB';

export default function Ssr({ data, totalCount, page, limit }) {

    const itemIds = useMemo(() => data.map(item => item.id), [data]);
    const [items, setItems] = useState(itemIds);
    const [clickCounts, setClickCounts] = useState({});

    useEffect(() => {
        const fetchClickCounts = async () => {
            const response = await fetch('http://192.168.0.25:7002/click_counts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemIds), 
            });
    
            if (!response.ok) {
                console.error(`Error fetching click counts: ${response.status} ${response.statusText}`);
                return;
            }
    
            const initialClickCounts = await response.json();
            setClickCounts(initialClickCounts);
        };
    
        if (Array.isArray(itemIds) && itemIds.every(Number.isInteger)) {
            fetchClickCounts();
        } else {
            console.error("itemIds must be an array of integers", itemIds);
        }
    }, [itemIds]);
    
    // console.log('ID一覧',itemIds);
    // console.log('クリックカウント数',clickCounts);
    // console.log('clickCountsの型:', typeof clickCounts);


    return (
      <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
          <Sidebar />
          <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5 order-2 md:order-2">
              {data.map((item, index) => {
                  let date = item.published_at ? new Date(item.published_at) : null;
                  let formattedDate = "";
  
                  if (date && !isNaN(date.getTime())) {
                      formattedDate = new Intl.DateTimeFormat('ja-JP', {
                          year: 'numeric', month: '2-digit', day: '2-digit',
                          hour: '2-digit', minute: '2-digit', second: '2-digit'
                      }).format(date);
                  } else {
                      console.error("Invalid date: ", item.published_at);
                  }
  
                  let tagsArray = [];
                  if (item.tag) {
                      tagsArray = item.tag.split(',').map(tag => tag.trim());
                  }
  
                  return (
                      <div key={index} className='Ui w-96 h-auto p-4 bg-white shadow-md rounded-md'>
                          <div onClick={() => { handleClickCount(item.id) }}>
                              <Link href="/[siteId]/[itemId]" as={`/${item.site_id}/${item.id}`}>
                                  <div>
                                      <div className="Topimages w-full h-56 bg-white-100 rounded-sm mb-4">
                                        <Image fill src={item.imgurl} className={styles.image} alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                      </div>
                                      <div className="Titles text-black text-2xl font-normal mb-4">
                                          {item.title}
                                      </div>
  
                                      <div className="Tags text-black text-2xl font-normal mb-4">
                                          <Tags tagsArray={tagsArray} />
                                      </div>
  
                                      <div className="Clicks text-center mb-4">
                                          <span style={{ color: 'black', fontSize: '24px', fontWeight: 'normal', letterSpacing: '0.1em' }}>
                                              {clickCounts[item.id] || 0}
                                          </span>
                                          <span style={{ color: 'black', fontSize: '16px', fontWeight: 'normal', letterSpacing: '0.1em' }}>
                                              Click
                                          </span>
                                      </div>
                                  </div>
                              </Link>
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>
  );
  
  
  
}

// TODO タグとクリックCSSいれる