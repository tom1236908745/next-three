import '../styles/globals.css' // global.cssはこのファイルからしかインポート出来ない
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
