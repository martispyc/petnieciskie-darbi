import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../config'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp