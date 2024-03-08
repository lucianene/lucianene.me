// import '@styles/main.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import React, { Fragment, useEffect, useRef } from 'react';
import router, { useRouter } from "next/router";
import Head from 'next/head';
// import trailingCursor from '@/libs/trailingCursor';

// type Props = AppProps & {
//   Component: Page
// }

export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: any) => page)
  const Layout = Component.layout ?? Fragment

  // useEffect(() => {
  //   disableReactDevTools()
  // }, [])

  // useEffect(() => {
  //   new trailingCursor({ element: document.querySelector("#trailing")})
  // }, [])

  return (
    <>
    <Head>
        <title>Lucian Ene - Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <NextNProgress color="#777" startPosition={0.7} height={3} />
      {getLayout(
        <Component {...pageProps} />
      )}
    </Layout>
    </>
  );
}
