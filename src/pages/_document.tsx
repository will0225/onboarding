import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP266PMD" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
