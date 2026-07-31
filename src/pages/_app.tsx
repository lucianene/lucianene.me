import type { AppProps } from 'next/app';
import React, { Fragment } from 'react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps & { Component: any }) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page)
  const Layout = Component.layout ?? Fragment

  return (
    <>
      <Head>
        <title>Lucian Ene — Engineering Lead &amp; Staff Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Engineering Lead, Staff Engineer and Full Stack developer based in Bucharest. Author of Fastcss." />
      </Head>
      <Layout>
        {getLayout(
          <Component {...pageProps} />
        )}
      </Layout>
    </>
  );
}
