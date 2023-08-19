import fetch from 'node-fetch';

const BASE_URL = 'https://api.erorice.com/sitemap'; // FastAPIアプリのベースURL

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  try {
    const response = await fetch(BASE_URL);
    const xmlData = await response.json();

    if (xmlData) {
        console.log('getServerSideProps is running...')
    } else {
        console.log('NoNNNNNNNNNN')
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

export default SiteMap;
