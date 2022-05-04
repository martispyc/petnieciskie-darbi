import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../config'

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp