import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000" />
            <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" /> 
            <link rel="stylesheet" href="../static/css/fontsblog.css" />
            <link rel="stylesheet" href="../static/css/blog/bootstrap-reboot.min.css" />
            <link rel="stylesheet" href="../static/css/blog/main.css" />
            <title>Блог</title>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <script src="https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU" type="text/javascript"></script>
        <script src="../static/js/yandeks_map.js"></script>
        </body>
      </html>
    )
  }
}