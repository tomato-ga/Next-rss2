import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config.js';
import Script from 'next/script';
import * as gtag from "@/lib/gtag";



export default function App({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      
      <Script 
      strategy="afterInteractive" 
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  )
}
