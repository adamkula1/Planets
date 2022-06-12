import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Sourceicon from '../public/assets/icon-source.svg'
import Data from '../data/data.json'
import { useState } from 'react';


const Venus: React.FC = () => {

  //Data from the JSON file is stored here
  const [Venus] = useState<any>(Data.Venus);
  const [value, setValue] = useState<number>(0);

  const { name, overview, content, source, structure, geology, rotation, revolution, radius, temperature, images, planet, internal } = Venus[value];

  const [index, setIndex] = useState<any>(overview);
  const [contents, setContents] = useState<string>("overview");
  const [imagePlanet, setImagePlanet] = useState<boolean>(true);
  const [imageInternal, setImageInternal] = useState<boolean>();
  
  const handleClick = (e: any) => {
    setContents(e.currentTarget.getAttribute('data-value'));
    changeContent();
  }

  const changeContent = () => {
    if (contents === "overview") {
      setIndex(overview);
      setImagePlanet(true);
      setImageInternal(false);
    } else if (contents === "structure") {
      setIndex(structure);
      setImagePlanet(false);
      setImageInternal(true);
    } else if (contents === "geology") {
      setIndex(geology);
      setImageInternal(false);
      setImagePlanet(true);
    } else {
      setIndex(overview);
      setImagePlanet(true);
      setImageInternal(false);
    }
  }

  return (
    <>
      <main>
      <section className='container'>
        <div className='planet-img'>
          {imagePlanet == true ? <Image src={images.planet} alt={name} width={320} height={320}/> : <Image src={images.internal} alt={name} width={320} height={320}/>}
              
              { contents === "geology" ? 
                <div className="geology-img">
                  <Image src={images.geology} alt="geology" width={163} height={199}/>
                </div>
              : ""
          }
        </div>
        <article>
          <h1 className='title'>{name}</h1>
          <p className='text'>{index.content}</p>
          <p className='source'>Source:
            <Link href={index.source}>
              <a target="_blank">Wikipedia</a></Link>
            <Image src={Sourceicon} alt="source" />
          </p>

          <div className='wrap-buttons'>
            <button onClick={handleClick} data-value="overview" className={`overview-box overview ${index == overview ? "venus-active" : ""}`}><span className='overview-number'>01</span>Overview</button>
            <button onClick={handleClick} data-value="structure" className={`overview-box structure ${index == structure ? "venus-active" : ""}`}><span className='overview-number'>02</span>Internal structure</button>
            <button onClick={handleClick} data-value="geology" className={`overview-box geology ${index == geology ? "venus-active" : ""}`}><span className='overview-number'>03</span>Surface geology</button>
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