// /Volumes/SSD_1TB/next-antena2/front/src/pages/tag/[tagpage]/page/[pageNumber].js

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';
import Pagination from '@/components/Pagination';
import useTotalCount from '@/hooks/useTotalCount';
import Link from 'next/link';
import styles from '@/components/iiim.module.css'
import Image from 'next/image';
import useTagPagination from '@/hooks/useTagPagination';
import { useRouter } from 'next/router';
import FetchClickCounts from '@/components/Clickcount';
import { handleClickCount } from '@/lib/clickCountDB';

import SearchBar from '@/components/SearchBar';
import PopularMovies from '@/components/PopularMovies';
import PopularTags from '@/components/PopularTags';
import Footer from '@/components/Footer';


const FavPage = () => {
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        const checkSavedArticles = () => {
          let savedbrowserArticles = JSON.parse(localStorage.getItem('articleData')) || [];
            console.log(savedbrowserArticles);
            setLocalData(savedbrowserArticles.pages || []);
        };

        checkSavedArticles();
    }, []);

    return (
        <>
            <Header />
            <SearchBar />
            <div className="justify-center text-center font-bold">
                <h2 className="mb-4">
                    <span className="border-b-2 pb-1 border-blue-300 text-2xl">
                        閲覧履歴
                    </span>
                </h2>
            </div>
            <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
                <Sidebar />
                <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2">
                    {localData.map((item, index) => {
                        let date = item.published_at ? new Date(item.published_at) : null;
                        let formattedDate = "";
                        if (date && !isNaN(date.getTime())) {
                            formattedDate = new Intl.DateTimeFormat('ja-JP', {
                                year: 'numeric', month: '2-digit', day: '2-digit',
                                hour: '2-digit', minute: '2-digit', second: '2-digit'
                            }).format(date);
                        }
                        let tagsArray = item.tag ? item.tag.split(',').map(tag => tag.trim()) : [];
                        return (
                            <div key={index} className='border-gray-300 rounded shadow-md'>
                                <div onClick={() => { handleClickCount(item.id) }}>
                                    <div className='border-gray-200'>
                                        <Link href="/item/[items]" as={`/item/${item.id}`}>
                                            <div className="relative h-[270px] w-full md:h-[320px] md:w-full">
                                                <img src={item.imgurl} className="w-full h-full object-cover" alt={item.title} />
                                                <span className="absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1">
                                                    <FetchClickCounts itemId={item.id} />
                                                </span>
                                            </div>
                                            <h2 className='m-2 text-sm md:text-xl font-bold text-blue-600'>
                                                {item.title}
                                            </h2>
                                        </Link>
                                        <div className='tags'>
                                            <Tags tagsArray={tagsArray} numberTags={5}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}


export default FavPage;
