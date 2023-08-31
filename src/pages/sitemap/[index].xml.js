// /pages/sitemap/[index].xml.js

import fetch from 'node-fetch';

export async function getServerSideProps({ params, res }) {
  try {
    const { index } = params;
    const response = await fetch(`https://api.erorice.com/sitemap/${index}.xml`);
    const xmlData = await response.text();

    if (xmlData) {
      // Set appropriate headers and send the XML data
      res.setHeader('Content-Type', 'text/xml');
      res.write(xmlData);
      res.end();
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    console.error('Error fetching sitemap data:', error);
    res.status(500).send('Internal server error');
  }

  return {
    props: {},
  };
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
  return null;
}
