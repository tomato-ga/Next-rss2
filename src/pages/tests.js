// /Volumes/SSD_1TB/next-antena2/front/src/pages/tests.js

import fetch from 'node-fetch';

function SiteMaps() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ params, res }) {

  try {
    const index = 2;
    const response = await fetch(`https://api.erorice.com/sitemap/${index}`);
    
    console.log('Status:', response.status); // Changed to 'response.status'
    
    if (response.ok) {
      const xmlData = await response.json();

      if (xmlData) {
          res.setHeader('Content-Type', 'text/xml');
          res.write(xmlData);
          res.end();
          return { props: {} };
      } else {
          res.status(404).end('Not found');
      }
    } else {
      res.status(response.status).end('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching sitemap data:', error);
    res.status(500).end('Internal server error');
  }

  return {
    props: {},
  };
}

export default SiteMaps;
