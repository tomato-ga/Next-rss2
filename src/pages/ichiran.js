import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Sidebar from '@/components/Sidebar';
import React from 'react'

const SiteIndex = ({ sitesIchiran }) => {

  return (
    <>
      <Header />
      <SearchBar />
      <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
        <Sidebar />
        
        <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2">
        
          <div className="col-span-2 flex justify-center"> {/* <- このdivを追加 */}
            <div className="text-center font-bold pb-5">
              <span className="border-b-2 pb-1 border-blue-300 text-2xl">
                登録サイト様一覧
              </span>
            </div>
          </div> {/* <- このdivを追加 */}
        
          {sitesIchiran.map((site, index) => {
            return (
              <div key={index}>
                <a href={site.url} className='hover:text-blue-600' target='_blank'>
                  <p>{site.name}</p>
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
  
}

export async function getServerSideProps() {
  let sitesIchiran = null; // ここで変数を定義

  try {
    // NOTE: ローカルのAPIとDBに接続しないとダメ
    const API_URL = 'https://api.erorice.com/site_names_and_ids';
    const response = await fetch(API_URL);
    sitesIchiran = await response.json();

    if (sitesIchiran) {
      console.log('OK response GET');
    } else {
      console.log('NO DATA');
    }

  } catch (error) {
    console.error('fetch error', error);
  }

  return {
    props: { sitesIchiran } // ここでpropsを明示的に定義
  }
}

export default SiteIndex
