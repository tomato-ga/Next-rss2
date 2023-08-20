// /Volumes/SSD_1TB/next-antena2/front/src/pages/_app.js

import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config.js';
import GoogleTagManager from '@/lib/gtag';
import { pageview } from '@/lib/gaPv';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>

        <link rel="dns-prefetch" href="//api.erorice.com" />
        <title>エロ動画アンテナ - エロコメベータ</title>
        <meta name="description" content="エロ動画を大量に紹介しています。エロコメはエロ動画のアンテナサイトです。お気に入りのキーワードで無料エロ動画を楽しめます" />
      
      </Head>
      <GoogleTagManager googleTagManagerId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
