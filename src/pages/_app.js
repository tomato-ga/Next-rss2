import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config.js';
import GoogleTagManager from '@/lib/gtag';
import { pageview } from '@/lib/gaPv';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
      <GoogleTagManager googleTagManagerId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
