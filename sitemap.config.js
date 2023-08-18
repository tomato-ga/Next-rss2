/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://erorice.com',
  generateRobotsTxt: true, // これをtrueに設定します
  exclude: ['/server-sitemap.xml'], // これを追加します
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://erorice.com/server-sitemap.xml', // ここを追加します
    ],
  },
  // 以下の設定はそのまま保持します
  sitemapSize: 7000,
  outDir: './out',
};
