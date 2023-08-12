export default {
  titleTemplate: '%s | サイト名',
  defaultTitle: 'タイトル',
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: '運営者名',
    },
    {
      name: 'application-name',
      content: 'サイト名',
    },
  ],
  openGraph: {
    url: 'https://hogehoge.com/',
    type: 'website',
    locale: 'ja_JP',
    site_name: 'サイト名',
  },
  twitter: {
    handle: '@hogehoge',
    site: '@fugafuga',
    cardType: 'summary_large_image',
  },
};