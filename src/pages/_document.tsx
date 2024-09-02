import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Website created with the aim of displaying points and the historical journey of Vazantes." />
        <meta name="author" content="vinnytherobot" />
        <meta property="og:image" content="../../public/img/vazantes-greja.jpg" />
        <meta property="og:url" content="https://vazantesportfolio.vercel.app/" />
        <meta name="google-adsense-account" content="ca-pub-6306379407245797" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6306379407245797" crossOrigin="anonymous"></script>

      </Head>
      <title>Vazantes - Portfólio</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
