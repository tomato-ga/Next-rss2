import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config.js';
import Head from 'next/head';


export default function App({ Component, pageProps }) {


  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-0PFN7Q7ZBX`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0PFN7Q7ZBX');
            `,
          }}
        />
      </Head>

      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
