import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from 'next/image'
import MenuIcon from "../public/assets/icon-hamburger.svg";
import ClearIcon from "../public/assets/icons-close.svg";





const Navbar= ({index, overview}:any) => {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }


  return (
    <header>
        <p className="logo">The planets</p>

        <nav>
            <ul className={navbarOpen ? "navOpen" : ""}>
                <li className={`${router.pathname == "/" ? "mercury" : ""}`}><div className="dot dot-Mercury"></div><Link href="/">Mercury</Link></li>
                <li className={`${router.pathname == "/Venus" ? "venus" : ""}`}><div className="dot dot-Venus"></div><Link href="/Venus">Venus</Link></li>
                <li className={`${router.pathname == "/Earth" ? "earth" : ""}`}><div className="dot dot-Earth"></div><Link href="/Earth">Earth</Link></li>
                <li className={`${router.pathname == "/Mars" ? "mars" : ""}`}><div className="dot dot-Mars"></div><Link href="/Mars">Mars</Link></li>
                <li className={`${router.pathname == "/Jupiter" ? "jupiter" : ""}`}><div className="dot dot-Jupiter"></div><Link href="/Jupiter">Jupiter</Link></li>
                <li className={`${router.pathname == "/Saturn" ? "saturn" : ""}`}><div className="dot dot-Saturn"></div><Link href="/Saturn">Saturn</Link></li>
                <li className={`${router.pathname == "/Uranus" ? "uranus" : ""}`}><div className="dot dot-Uranus"></div><Link href="/Uranus">Uranus</Link></li>
                <li className={`${router.pathname == "/Neptune" ? "neptune" : ""}`}><div className="dot dot-Neptune"></div><Link href="/Neptune">Neptun</Link></li>
            </ul>

            <button className="menu-icon" onClick={handleToggle}>
              {navbarOpen ? 
                  <Image className="clearIcon" src={ClearIcon} alt="close"/>
                : 
                  <Image className="menuIcon" src={MenuIcon} alt="menu"/>
              }
            </button>
        </nav>
    </header>
  )
}

export default Navbar