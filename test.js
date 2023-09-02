import { getServerSideSitemapLegacy } from 'next-sitemap';
import axios from 'axios';

export const getServerSideProps = async () => {
  let urls = [];

  // 1から1000までのページを取得する例
  for (let number = 1; number <= 2800; number++) {
    try {
      const response = await axios.get(`https://ape.erorice.com/rss/all/latest?page=${number}`);

      // ステータスコードが200以外の場合、ループを中断
      if (response.status !== 200) {
        console.error(`Error: API responded with status code ${response.status}`);
        break;
      }

      const data = response.data;

      // APIレスポンスのデータ構造に合わせて、動的なパスを抽出します。
      const newUrls = data.items.map(item => ({
        loc: `https://erorice.com/${item.site_id}/${item.id}`, // Absolute url
        lastmod: new Date().toISOString(),
      }));

      urls = urls.concat(newUrls);
    } catch (error) {
      console.error('Failed to get dynamic routes:', error);
      break;
    }
  }

  return getServerSideSitemapLegacy(urls);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
