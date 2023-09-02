// /pages/index.js

import Header from '@/components/Header'

import Ssr from './topSSR'
import SearchBar from '@/components/SearchBar';
import PopularMovies from '@/components/PopularMovies';
import PopularTags from '@/components/PopularTags';
import Footer from '@/components/Footer';


export default function Home({ data, totalCount, popumoviesRes, popuTagsRes, page, limit }) {


  return (
    <>
      <Header />
      <SearchBar />
      <PopularMovies popumoviesRes={popumoviesRes} />
      <PopularTags popuTagsRes={popuTagsRes} />
      <Ssr data={data} totalCount={totalCount} page={page} limit={limit} />
      <Footer />
    </>
  )
}


export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const limit = context.query.limit || 20;

  const fetchData = async () => {
    try {
      // ページネーションでトップに表示する件数
      const fetchRes = await fetch(
        `https://ape.erorice.com/rss/all/latest?page=${page}&limit=${limit}`
      );
      const data = await fetchRes.json();
  
      if (!Array.isArray(data) || !data.length) {
        return {
          notFound: true,
        };
      }
  
      // ページネーションの総数カウント
      const res = await fetch("https://ape.erorice.com/total_count");
      const totalData = await res.json();
      const totalCount = totalData;
      
      // 人気動画
      const popumovies = await fetch("https://ape.erorice.com/top_movies");
      const popumoviesRes = await popumovies.json();

      // 人気のキーワード
      const poputags = await fetch("https://ape.erorice.com/top_tags");
      const popuTagsRes = await poputags.json();


      if (!data && !totalCount && !popumoviesRes && !popuTagsRes) {
        return {
          notFound: true,
        };
      }
  
      return { data, totalCount, popumoviesRes, popuTagsRes }; // 返り値を明示的に返す
    } catch (error) {
      console.error(error);
    }
  };

  const { data, totalCount, popumoviesRes, popuTagsRes } = await fetchData();

  // キャッシュ設定
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      data,
      totalCount,
      popumoviesRes,
      popuTagsRes,
      page,
      limit,
    },
  };
}