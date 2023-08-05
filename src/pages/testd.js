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
            const response = await fetch('http://119.106.61.124:7002/click_counts', {
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
        <div className="Ui w-96 h-96 relative">
            <div className="Topimages w-96 h-56 left-0 top-0 absolute bg-pink-100 rounded-sm" />

            <div className="Titles w-96 h-36 left-0 top-[225px] absolute">
                <div className="Rectangle5 w-96 h-28 left-0 top-0 absolute bg-white" />
                <div className=" w-96 h-20 left-[28px] top-[34px] absolute text-black text-2xl font-normal">タイトルタイトルタイトルタイトルタイトルタイトル</div>
            </div>

            <div className="Tags w-96 h-28 left-0 top-[380px] absolute">
                <div className="Rectangle5 w-96 h-28 left-0 top-0 absolute bg-white" />
                <div className=" w-96 h-20 left-[28px] top-[34px] absolute text-black text-2xl font-normal">タグ タグ タグ タグ タグ タグ タグ タグ タグ タグ タグ タグ</div>
            </div>

            <div className="Clicks w-96 h-28 left-[3px] top-[518px] absolute">
                <div className="Rectangle5 w-96 h-28 left-0 top-0 absolute bg-white" />
                <div className="Click w-32 h-20 left-[167px] top-[19px] absolute text-center">
                    <span style="text-black text-4xl font-normal tracking-widest">10000<br/></span>
                    <span style="text-black text-2xl font-normal tracking-widest">Click</span>
                </div>
            </div>
        </div>
    )
}

// pushされないのをテスト中