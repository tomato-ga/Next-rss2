import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RelatedTagPosts from '@/components/RelatedTagPosts';
import Comment from '@/components/Comment';
import Tags from '@/components/Tags';
import Link from 'next/link';


const Posts = () => {
    const [data, setData] = useState(null);
    const [rssFeeds, setRssFeeds] = useState([]);
    const router = useRouter();
    const { siteId, itemId } = router.query;

    useEffect(() => {
        if (router.isReady) {
            const fetchData = async () => {
                try {
                    const ENDP = `http://192.168.0.25:7002/sites/rss/${itemId}`;
                    const res = await fetch(ENDP);
                    const data = await res.json();
                    setData(data);
                    
                    console.log(data[0].id);
                    let savedArticles = JSON.parse(localStorage.getItem('articleData')) || [];

                    // 同じIDのデータが存在するかチェック
                    const isArticleExist = savedArticles.some(article => article[0].id === data[0].id);
                    
                    if (!isArticleExist) {
                    // 保存されたデータが5件の場合、最古のデータを削除
                    if (savedArticles.length === 1000) {
                        savedArticles.shift();
                    }
                    
                    // 新しいデータを追加
                    savedArticles.push(data);
                    
                    // 更新されたデータを保存
                    localStorage.setItem('articleData', JSON.stringify(savedArticles));
                    }

                    // const feedsResponse = await fetch(`http://192.168.0.25:7002/sites/${siteId}/rss/latest`);
                    // const feedsData = await feedsResponse.json();
                    // setRssFeeds(feedsData);
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

const checkSavedArticles = () => {
    let savedbrowserArticles = JSON.parse(localStorage.getItem('articleData')) || [];

    if (savedbrowserArticles) {
    return savedbrowserArticles;
    } else {
        return false;
    }
}

const articles = checkSavedArticles();


    return (
        <div>
            <Header />
            <div className='container mx-auto px-4 py-6 flex flex-col-reverse md:flex-row'>
                <Sidebar />
                <div className='md:w-3/4 md:ml-4'>
                    <h1 className="m-2 text-xl md:text-4xl font-bold text-blue-600 border-b pb-2">{data[0].title}</h1>

                    <div className='grid md:grid-cols-2 gap-2'>
                        <div className='desc p-5'>
                            {<img src={data[0].imgurl}></img>}
                        </div>

                        <div className='p-2 md:p-4'>
                            <Tags tagsArray={tags} numberTags={20}/>
                        </div>
                    </div>

                    <div className='text-2xl bg-blue-700 text-white text-center font-semibold hover:bg-orange-700 rounded-md'>
                        <h3><a href={data[0].link} target='_blank'>{data[0].title}のページを見る</a></h3>
                    </div>

                    {/* コメント */}
                    {/* <div className='py-10 px-3'>
                    <Comment rss_id={itemId}/>  */}
                    {/* itemId=データベースのrss_idなので、propsで渡す */}

                    <div className='mt-5 mb-3 p-2 font-bold text-2xl bg-slate-400 text-black'>
                        <h2>最近チェックした動画</h2>
                    </div>

                    {/* コンポーネント化する */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center">
                    {articles ? articles.reverse().slice(0, 6).map((articleGroup, groupIndex) => (
                        articleGroup.map((article, articleIndex) => (
                        <>
                        <Link href="/[siteId]/[itemId]" as={`/${article.site_id}/${article.id}`}>
                            <div key={articleIndex} className="mr-3 mb-3 flex flex-col">
                            <div className="relative flex justify-center items-center h-[200px] md:h-[170px] w-[250px] md:w-[170px] mx-auto">
                                <Image className="" fill src={article.imgurl} alt={article.title} sizes="(max-width: 600px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw" />
                            </div>
                            <h3 className='p-2 text-center text-base'>{article.title}</h3>
                            </div>
                        </Link>
                        </>
                        ))
                    )) : null}
                    </div>

                    {/* 関連動画 */}
                    <RelatedTagPosts tag={tags[0]} />
    
                    {/* このサイトのRSS URL */}
                    {/* <div className='rss-feeds'>
                        <h3 className='text-3xl'>このサイトのRSS一覧</h3>
                        {rssFeeds.slice(0,6).map((feed, index) => (
                            <div key={index}>
                                <a href={feed.link} target="_blank" rel="noopener noreferrer">
                                    <h3 className="text-2xl">{feed.title}</h3>
                                </a>
                            </div>
                        ))}
                    </div> */}

                </div>
            </div>
        </div>
    );

}

export default Posts;