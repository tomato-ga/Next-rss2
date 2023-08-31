// /Volumes/SSD_1TB/next-antena2/front/src/pages/sitemap.xml.js

import fetch from 'node-fetch';

const BASE_URL = 'https://api.erorice.com/sitemap_index';  // サイトマップインデックスへのURLを指定

function SiteMapIndex() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  try {
    const response = await fetch(BASE_URL);
    const xmlData = await response.json();  // XML形式のレスポンスをテキストとして取得

    if (xmlData) {
        console.log('getServerSideProps is running...')
    } else {
        console.log('No data received.')
    }

    // Set appropriate headers and send the XML data
    res.setHeader('Content-Type', 'text/xml');
    res.write(xmlData);
    res.end();
  } catch (error) {
    console.error('Error fetching sitemap data:', error);
    res.status(500).send('Internal server error');
  }

  return {
    props: {},
  };
}

export default SiteMapIndex;
