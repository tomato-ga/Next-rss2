import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Header from '@/components/Header';

const Posts = () => {
    const [data, setData] = useState(null);
    const [rssFeeds, setRssFeeds] = useState([]);
    const router = useRouter();
    const { siteIndex, itemId } = router.query;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ENDP = `http://localhost:7002/sites/rss/${itemId}`;
                const res = await axios.get(ENDP);
                setData(res.data);

                const feedsResponse = await axios.get(`http://localhost:7002/sites/${siteIndex}/rss`);
                setRssFeeds(feedsResponse.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        if (id) {
            fetchData();
        }
    }, [siteIndex, itemId]);

    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Header />
            <div className='container mx-auto px-4 py-6'>
                <h2 className="text-3xl border-b border-b-gray-200">{data[0].title}</h2>
                <div className='desc p-5'>
                    {data[0].description}
                </div>
                <div className='rss-feeds'>
                    <h3 className='text-3xl'>このサイトのRSS一覧</h3>
                    {rssFeeds.slice(0,6).map((feed, index) => (
                        <div key={index}>
                            <a href={feed.link} target="_blank" rel="noopener noreferrer">
                                <h3 className="text-2xl">{feed.title}</h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    
}

export default Posts
