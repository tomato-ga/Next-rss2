import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import React from 'react'

const SiteIndex = ({ sitesIchiran }) => {

  console.log(sitesIchiran);

  return (
    <>
    <Header />
    <SearchBar />
    <Footer />
    </>
  )
}


export async function getServerSideProps() {

  try {
    // NOTE: ローカルのAPIとDBに接続しないとダメ
    // const API_URL = 'http://127.0.0.1:8000/sites'
    const response = await fetch(API_URL);
    const sitesIchiran = await response.json();

    if (sitesIchiran) {
      console.log('OK response GET');
    } else {
      console.log('NO DATA');
    }

  } catch (error) {
    console.error('fetch error', error);
  }

  return {
    props: sitesIchiran
  }

}

export default SiteIndex