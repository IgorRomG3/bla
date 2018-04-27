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
        <body>
          <Main />
          <footer>
            <div className="left_block">
                <div className="znak_wr">
                <img src="static/img/blog/footer/znak.svg"
                    alt="Знак AIVI" />
                </div>
            </div>
            <div className="right_block">
                <div className="contact_wr">
                <div className="b_left">
                    <div className="title">
                    Офис
                    </div>
                    <div className="descr address">
                    <span className="underline">Москва, ул. Большая</span><br />
                    <span className="underline">Новодмитровская, 36</span>
                    </div>
                </div>
                <div className="b_right">
                    <div className="title">
                    Связь
                    </div>
                    <div className="descr">
                    <a href="tel:+74951200834"
                        className="underline">+7 (495) 120-08-34</a>
                    <a href="mailto:info@aivi.ru"
                        className="underline">info@aivi.ru</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright_wr">
                <span>&copy;2018 ООО «АЙВИ».</span><br />
                <span>Все права защищены</span>
            </div>
            </footer>

            <div className="map_block">
                <div className="map_block_bg"></div>
                <div className="map_container">
                    <div className="close_map">
                    </div>

                    <div className="map" id="YMapsID">
                    </div>
                </div>
            </div>
          <NextScript />
          <script src="https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU" type="text/javascript"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="../static/js/yandeks_map.js"></script>
        </body>
      </html>
    )
  }
}