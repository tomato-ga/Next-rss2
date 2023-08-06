import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/iiim.module.css'
import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';
import Pagination from '@/components/Pagination';
import SearchForm from '@/components/Search';

export default function NewSsr({ initialData, initialTotalCount, pageNumber }) {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(pageNumber || 1);
    const pageSize = 20;

    useEffect(() => {
        if (router.query.page) {
            setCurrentPage(Number(router.query.page));
        }
    }, [router.query.page]);

    const changePage = async (page) => {
        setCurrentPage(page);
        router.push(`/page/${page}`);
    }

    return (
        <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
            <Sidebar />
            <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5 order-2 md:order-2">
            <SearchForm />
                {data.map((item, index) => {
                    let date = item.published_at ? new Date(item.published_at) : null;
                    let formattedDate = "";

                    if (date && !isNaN(date.getTime())) { // Check if date is valid
                        formattedDate = new Intl.DateTimeFormat('ja-JP', {
                            year: 'numeric', month: '2-digit', day: '2-digit',
                            hour: '2-digit', minute: '2-digit', second: '2-digit'
                        }).format(date);
                    } else {
                        console.error("Invalid date: ", item.published_at);
                    }
                    let tagsArray = [];
                    if (item.tag) { // Check if tag exists
                        tagsArray = item.tag.split(',').map(tag => tag.trim());
                    }
                    return (
                        <div key={index} className='my-1 px-4 border-gray-300 rounded-lg shadow-lg'>
                            <div className='border-b border-gray-200 m-3'>
                                <Link href="/[siteId]/[itemId]" as={`/${item.site_id}/${item.id}`}>
                                    <div className="p-4 relative">
                                        <Image fill src={item.imgurl} className={styles.image} alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                    </div>
                                    <h2 className='m-3 text-xl'>
                                        {item.title}
                                    </h2>
                                </Link>
                                <div className='tags'>
                                <Tags tagsArray={tagsArray}/>
                                </div>
                                <div className='date px-2 align-sub text-gray-500'>
                                    {date && <p>{formattedDate}</p>}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <Pagination 
                totalCount={totalCount} 
                pageSize={pageSize} 
                currentPage={currentPage} 
                changePage={changePage}
                pageChangeUrl={(page) => `/page/${page}`}
                />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const pageNumber = context.query.page ? Number(context.query.page) : 1;
    let initialData = [];
    let initialTotalCount = 0;

    try {
        const dataRes = await fetch(`http://192.168.0.25:7002/rss/all/latest?page=${pageNumber}`);
        if(dataRes.ok) {
            initialData = await dataRes.json();
        } else {
            console.error('Data fetch error: ', dataRes.status);
            throw new Error('Data fetch error');
        }

        const countRes = await fetch('http://192.168.0.25:7002/total_count');
        if(countRes.ok) {
            const countData = await countRes.json();
            initialTotalCount = countData.count;
        } else {
            console.error('Count fetch error: ', countRes.status);
            throw new Error('Count fetch error');
        }
    } catch (error) {
        console.error(error);
        return {
            notFound: true, // This will render the custom 404 page
        };
    }

    return {
        props: {
            initialData,
            initialTotalCount,
            pageNumber,
        }
    }
}