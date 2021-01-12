import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="theme-color" content="#ffffff" />
          {process.env.NODE_ENV === "production" && (
            <>
              <script
                async
                defer
                data-domain="kiteframe.co.uk"
                src="https://plausible.io/js/plausible.outbound-links.js"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html:
                    "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }",
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
