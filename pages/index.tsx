import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Mercury from '../public/assets/planet-mercury.svg'
import Source from '../public/assets/icon-source.svg'

import data from '../data/data.json'


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Planets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <section className='container'>
          <div className='planet-img'><Image src={Mercury} alt="mercury" width={320} height={320}/></div>
          <article>
            <h1 className='title'>Mercury</h1>
            <p className='text'>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun&apos;s planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
            <p className='source'>Source:
              <Link href="https://en.wikipedia.org/wiki/Mercury_(planet)">
                <a target="_blank">Wikipedia</a></Link>
              <Image src={Source} alt="source" />
            </p>

            <div className='wrap-buttons'>
              <button className='overview'><span className='overview-number'>01</span>Overview</button>
              <button className='overview'><span className='overview-number'>02</span>Internal structure</button>
              <button className='overview'><span className='overview-number'>03</span>Surface geology</button>
            </div>
          </article>
        </section>

        <section className='content'>
          <div className='data-box'>
            <div className='box'>
              <h4>Rotation time</h4>
              <h2>58.6 Days</h2>
            </div>
          </div>

          <div className='data-box'>
            <div className='box'>
              <h4>Revolution time</h4>
              <h2>87.97 days</h2>
            </div>
          </div>

          <div className='data-box'>
            <div className='box'>
              <h4>Radius</h4>
              <h2>2,439.7 km</h2>
            </div>
          </div>

          <div className='data-box'>
            <div className='box'>
              <h4>Avarage temp.</h4>
              <h2>430°c</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

