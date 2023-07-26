// /Volumes/SSD_1TB/next-antena2/front/src/pages/page/[number].js

import Header from "@/components/Header";
import Ssr from "../topSSR";

const Page = ({ data, totalCount, page, limit }) => {
  return (
    <>
    <Header />
    <Ssr data={data} totalCount={totalCount} page={page} limit={limit} />
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
    
    const fetchRes = await fetch(`http://192.168.0.25:7002/rss/all/latest?page=${page}&limit=${limit}`);
    const data = await fetchRes.json();
  
    const res = await fetch('http://192.168.0.25:7002/total_count')
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
