import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0F1218" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lucian Ene" />
        <meta property="og:title" content="Lucian Ene — Engineering Lead & Staff Engineer" />
        <meta property="og:description" content="Engineering Lead, Staff Engineer and Full Stack developer based in Bucharest. Author of Fastcss." />
        <meta property="og:url" content="https://lucianene.me" />
        <meta property="og:image" content="https://lucianene.me/og.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucian Ene — Engineering Lead & Staff Engineer" />
        <meta name="twitter:description" content="Engineering Lead, Staff Engineer and Full Stack developer based in Bucharest. Author of Fastcss." />
        <meta name="twitter:image" content="https://lucianene.me/og.svg" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
