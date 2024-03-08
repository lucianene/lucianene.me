import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        {/*<link rel="stylesheet" href="./public/style.min.css" />*/}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&amp;display=swap" rel="stylesheet" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/24269157?v=4" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
