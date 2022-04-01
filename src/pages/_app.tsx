
import type { AppProps } from 'next/app'
import  "../../styles/globals.css";
import Layout from '../components/AppBar/Layout';
import "swiper/css/bundle";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <Layout>
      <Component {...pageProps} />
    </Layout>

  );
}

export default MyApp
