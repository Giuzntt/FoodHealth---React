
import type { AppProps } from 'next/app'
import  "../../public/styles/globals.css";
import "swiper/css/bundle";

import { GlobalStyles } from '../../public/styles/globalStyle';
import Layout from '../components/Navigation/Layout';

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
