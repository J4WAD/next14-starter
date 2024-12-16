// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>ASKIM – Webflow HTML website template</title>
        <meta
          name="description"
          content="ASKIM is a beautiful personal dashboard portfolio template. Featuring dark mode, sidebar navigation, and slick hover effects. It’s production-ready and easy to customize, making it the perfect starting point for your own personal website."
        />
        <meta
          property="og:title"
          content="ASKIM – Webflow HTML website template"
        />
        <meta
          property="og:description"
          content="ASKIM is a beautiful personal dashboard portfolio template. Featuring dark mode, sidebar navigation, and slick hover effects. It’s production-ready and easy to customize, making it the perfect starting point for your own personal website."
        />
        <meta
          property="og:image"
          content="https://fouroom.co/templates/opengraph/askim_open-graph.jpg"
        />
        <meta
          property="twitter:title"
          content="ASKIM – Webflow HTML website template"
        />
        <meta
          property="twitter:description"
          content="ASKIM is a beautiful personal dashboard portfolio template. Featuring dark mode, sidebar navigation, and slick hover effects. It’s production-ready and easy to customize, making it the perfect starting point for your own personal website."
        />
        <meta
          property="twitter:image"
          content="https://fouroom.co/templates/opengraph/askim_open-graph.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Webflow" />
        <link
          href="/css/askim-template.webflow.990925152.min.css"
          rel="stylesheet"
        />
        <link
          href="/images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/app-icon.png" rel="apple-touch-icon" />
        <style>
          {`body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }`}
        </style>
        <script>
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </script>
        <script>
          {`window.__WEBFLOW_CURRENCY_SETTINGS = { "currencyCode": "USD", "symbol": "$", "decimal": ".", "fractionDigits": 2, "group": ",", "template": "{{wf {\"path\":\"symbol\",\"type\":\"PlainText\"} }} {{wf {\"path\":\"amount\",\"type\":\"CommercePrice\"} }} {{wf {\"path\":\"currencyCode\",\"type\":\"PlainText\"} }}", "hideDecimalForWholeNumbers": false };`}
        </script>
      </Head>
      <main>
        <h1>Welcome to ASKIM</h1>
      </main>
    </>
  );
}
