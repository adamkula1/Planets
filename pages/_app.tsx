import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'


type Planets = {
  name: string;
  overview: {
    content:string;
    source: string;
  }
  structure: {
    content:string;
    source: string;
  }
  geology: {
    content:string;
    source: string;
  }
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  }
};




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}

export default MyApp
