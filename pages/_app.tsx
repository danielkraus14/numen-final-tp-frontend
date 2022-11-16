import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout';
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../resources/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}
