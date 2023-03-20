import { ToastContainer } from 'react-toastify'
import ProgressBar from '@components/common/ProgressBar'
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

// react-toastify
import 'react-toastify/dist/ReactToastify.css'

// progress bar
// import "nprogress/nprogress.css";
import '@styles/progressbar.css'

import { ApolloProvider } from "@apollo/client";
import client from 'src/services/api'


function MyApp({ Component, pageProps }: AppProps) {

  // @ts-ignore
  const CustomLayout = Component.Layout || Layout

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <CustomLayout>
      <ProgressBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={'dark-toast'}
      />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </CustomLayout>
  </>
}

export default MyApp
