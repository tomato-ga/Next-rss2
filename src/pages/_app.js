import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config.js';
import GoogleTagManager from '@/lib/gtag';


export default function App({ Component, pageProps }) {


  return (
    <>
      <GoogleTagManager googleTagManagerId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
