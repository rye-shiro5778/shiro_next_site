/* eslint-disable @next/next/no-page-custom-font */
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content="White" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Homenaje&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
