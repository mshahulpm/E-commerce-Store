import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from 'src/layout'
// css 
import "@styles/bootstrap.min.css"
import "@styles/font-awesome.min.css"
import "@styles/elegant-icons.css"
import "@styles/style.css"
import "@styles/custom.css"

// css - react-slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {

  // @ts-ignore
  const CustomLayout = Component.Layout || Layout

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  </>
}

export default MyApp
