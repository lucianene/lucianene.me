import type { AppProps } from 'next/app';
import React, { Fragment } from 'react';
import Head from 'next/head';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import LinkSounds from '@/components/LinkSounds';
import {
  personJsonLd,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_TITLE,
  SITE_URL,
  websiteJsonLd,
} from '@/lib/seo';

export default function MyApp({ Component, pageProps }: AppProps & { Component: any }) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page)
  const Layout = Component.layout ?? Fragment

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <meta name="author" content="Lucian Ene" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </Head>
      <GoogleAnalytics />
      <LinkSounds />
      <Layout>
        {getLayout(
          <Component {...pageProps} />
        )}
      </Layout>
    </>
  );
}
