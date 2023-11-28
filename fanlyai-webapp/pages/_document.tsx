import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Note: Do not add the title tag here; it's better to set it in individual pages or using a layout component */}
        <meta name="description" content="VuzzAI Tools App" />
        {/* Other meta tags and resources like stylesheets can be added here */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
