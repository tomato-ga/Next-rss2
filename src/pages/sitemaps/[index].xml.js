import fetch from 'node-fetch';

function SiteMap() {
    // getServerSideProps will do the heavy lifting
  }

export async function getServerSideProps({ params, res }) {
  console.log('Getting sitemap for index:', params.index);

  try {
    const { index } = params.index;
    const response = await fetch(`https://api.erorice.com/sitemap/${index}.xml`);
    
    // Check if the request was successful
    if (response.ok) {
      const xmlData = await response.json();
      console.log('Received XML data:', xmlData);

      if (xmlData) {
          console.log('getServerSideProps is running...');
          // Set appropriate headers and send the XML data
          res.setHeader('Content-Type', 'text/xml');
          res.write(xmlData);
          res.end();
      } else {
          console.log('No data received.');
          res.status(404).send('Not found');
      }
    } else {
      console.log(`Failed to fetch sitemap: ${response.status}`);
      res.status(response.status).send('Failed to fetch data');
    }
    
  } catch (error) {
    console.error('Error fetching sitemap data:', error);
    res.status(500).send('Internal server error');
  }

  return {
    props: {},
  };
}


export default SiteMap;

// TODO 修正中