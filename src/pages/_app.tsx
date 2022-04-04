
import type { AppProps } from 'next/app'
import  "../../styles/globals.css";
import Layout from '../components/AppBar/Layout';
import "swiper/css/bundle";
import Head from 'next/head';
import { GlobalStyles } from '../../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    <GlobalStyles/>
    </>
  );
}

export default MyApp
