import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Sidebar = () => {

    const [topTags, settopTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ENDP = `http://119.106.61.124:7002/top_tags`;
                const res = await fetch(ENDP);
                const data = await res.json();
                settopTags(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
    
        fetchData(); // 非同期関数を呼び出す
    }, []);
    

    return (
        <div className='border border-gray-300 rounded-lg shadow-lg p-5 flex-grow-0 w-56'>
            <h2 className='text-xl mb-4 text-center'>人気のキーワード</h2>
            {topTags.slice(0,10).map((tag, index) => (
                <div key={index}>
                    <ul className='space-y-2'>
                        <li className='list-disc text-blue-500 font-bold'>
                            <Link href={`/tag/${tag}/page/1`}>
                            {tag}
                            </Link>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;
