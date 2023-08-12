// /Volumes/SSD_1TB/next-antena2/front/src/pages/page/[number].js

import Header from "@/components/Header";
import Ssr from "../topSSR";

import SearchBar from '@/components/SearchBar';
import PopularMovies from '@/components/PopularMovies';
import PopularTags from '@/components/PopularTags';
import Footer from '@/components/Footer';

const Page = ({ data, totalCount, page, limit }) => {
  // todo next-seoのコンポーネント入れる
  return (
    <>
    <Header />
    <SearchBar />
    <PopularMovies />
    <PopularTags />
    <Ssr data={data} totalCount={totalCount} page={page} limit={limit} />
    <Footer />

    </>
  );
};

export async function getServerSideProps(context) {
    const page = context.params.number;
    const limit = 20;
  
    if (!page) {
      return {
        notFound: true,
      };
    }
    
    const fetchRes = await fetch(`https://api.erorice.com/rss/all/latest?page=${page}&limit=${limit}`);
    const data = await fetchRes.json();
  
    const res = await fetch('https://api.erorice.com/total_count')
    const totalData = await res.json()
    const totalCount = totalData.count
  
    return {
      props: { 
        data,
        totalCount,
        page: Number(page),
        limit 
      },
    }
}

export default Page;
