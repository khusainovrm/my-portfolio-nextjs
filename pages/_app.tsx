import { AppProps } from 'next/app'
import '../assets/css/globals.css'
import '../assets/css/ToggleSwitch.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
