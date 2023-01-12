import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta
          name='description'
          content="RESHUR's Portfolio"
        />
        <meta
          name='author'
          content='RESHUR'
        />
        <meta charSet='utf-8'></meta>
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@300;400;600;700&family=Roboto+Mono:wght@300;400;500;600;700&family=Rock+Salt&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
