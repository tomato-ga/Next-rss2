// /pages/index.js

import Header from '@/components/Header'

import Ssr from './topSSR'
import SearchBar from '@/components/SearchBar';
import PopularMovies from '@/components/PopularMovies';
import PopularTags from '@/components/PopularTags';
import Footer from '@/components/Footer';

import { setData } from '@/store/dataSlice';
import { useEffect } from 'react';

export default function Home({ data, totalCount, page, limit }) {


  return (
    <>
      <Header />
      <SearchBar />
      {/* <PopularMovies /> */}
      <PopularTags />
      <Ssr data={data} totalCount={totalCount} page={page} limit={limit} />
      <Footer />
    </>
  )
}


export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const limit = context.query.limit || 20;

  const fetchRes = await fetch(`https://api.erorice.com/rss/all/latest?page=${page}&limit=${limit}`);
  const data = await fetchRes.json();
  console.log(data);

  if (!Array.isArray(data) || !data.length) {
    return {
        notFound: true,
    }
}


  const res = await fetch('https://api.erorice.com/total_count')
  const totalData = await res.json()
  const totalCount = totalData.count


  if (!data && !totalCount) {
    return {
      notFound: true,
    }
  }

  // キャッシュ設定
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {
      data,
      totalCount,
      page, 
      limit,
    }
  }
}
