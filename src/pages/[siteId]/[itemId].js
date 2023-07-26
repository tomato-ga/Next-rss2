import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import RelatedPosts from '@/components/RelatedPosts';
import Sidebar from '@/components/Sidebar';

const Posts = () => {
    const [data, setData] = useState(null);
    const [rssFeeds, setRssFeeds] = useState([]);
    const router = useRouter();
    const { siteId, itemId } = router.query;

    useEffect(() => {
        if (router.isReady) {
            const fetchData = async () => {
                try {
                    const ENDP = `http://119.106.61.124:7002/sites/rss/${itemId}`;
                    const res = await fetch(ENDP);
                    const data = await res.json();
                    setData(data);
                    

                    const feedsResponse = await fetch(`http://119.106.61.124:7002/sites/${siteId}/rss/latest`);
                    const feedsData = await feedsResponse.json();
                    setRssFeeds(feedsData);
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            }
            if (itemId) {
                fetchData();
            }
        }
    }, [router.isReady, siteId, itemId]);  // Note the addition of router.isReady

    if (!data) {
        return <p>Loading...</p>
    }
    // タグをオブジェクト化
    let tags = data[0].tag.split(',');
    // console.log(tags)


    return (
        <div>
            <Header />
            <div className='container mx-auto px-4 py-6 flex flex-col-reverse md:flex-row'>
                <Sidebar />
                <div className='md:w-3/4 md:ml-4'>
                    <h2 className="text-3xl bg-indigo-400 text-white">{data[0].title}</h2>
                    <div className='desc p-5'>
                        {<img src={data[0].imgurl}></img>}
                    </div>
                    <div className='pagetitle'>
                        <h3><a href={data[0].link} target='_blank'>{data[0].title}</a></h3>
                    </div>
                    <RelatedPosts tag={tags[0]} />
    
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
        </div>
    );

}

export default Posts;