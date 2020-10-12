import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GetxGet</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/favicon.ico" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="ASX, Eclipse Cross, Outlander, Pajero, L200 Triton - Concessionárias - Eventos"
        />
        <link rel="stylesheet" href="/static/css/swiper.min.css" />
        <link rel="stylesheet" href="/static/css/animate.min.css" />
        <link rel="stylesheet" href="/static/css/fonts.css" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
