import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title />
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
