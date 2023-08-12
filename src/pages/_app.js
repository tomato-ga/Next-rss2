import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config.js'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
