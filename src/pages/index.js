// /Volumes/SSD_1TB/next-antena2/front/src/pages/index.js

import Header from '@/components/Header'
import Ssr from './topSSR'
import SearchBar from '@/components/SearchBar';


export default function Home({ data, totalCount, page, limit }) {
  return (
    <>
      <Header />
      <SearchBar />
      <Ssr data={data} totalCount={totalCount} page={page} limit={limit} />
    </>
  )
}

export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const limit = context.query.limit || 20;

  const fetchRes = await fetch(`http://192.168.0.25:7002/rss/all/latest?page=${page}&limit=${limit}`);
  const data = await fetchRes.json();

  const res = await fetch('http://192.168.0.25:7002/total_count')
  const totalData = await res.json()
  const totalCount = totalData.count


  console.log("Fetched data: ", data); // Add this line

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
      limit
    }
  }
}