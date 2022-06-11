import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Sourceicon from '../public/assets/icon-source.svg'
import Data from '../data/data.json'
import { useState } from 'react';

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
  };
};

const Venus: React.FC = () => {

  //Data from the JSON file is stored here
  const [Venus] = useState<any>(Data.Venus);
  const [value, setValue] = useState<number>(0);

  const { name, overview, content, source, structure, geology, rotation, revolution, radius, temperature, images, planet, internal } = Venus[value];


  return (
    <>
      <main>
      <section className='container'>
        <div className='planet-img'><Image src={images.planet} alt={name} width={320} height={320}/></div>
        <article>
          <h1 className='title'>{name}</h1>
          <p className='text'>{overview.content}</p>
          <p className='source'>Source:
            <Link href={overview.source}>
              <a target="_blank">Wikipedia</a></Link>
            <Image src={Sourceicon} alt="source" />
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
            <h2>{rotation}</h2>
          </div>
        </div>

        <div className='data-box'>
          <div className='box'>
            <h4>Revolution time</h4>
            <h2>{revolution}</h2>
          </div>
        </div>

        <div className='data-box'>
          <div className='box'>
            <h4>Radius</h4>
            <h2>{radius}</h2>
          </div>
        </div>

        <div className='data-box'>
          <div className='box'>
            <h4>Avarage temp.</h4>
            <h2>{temperature}</h2>
          </div>
        </div>
      </section>
    </main>
</>
)

}

export default Venus;