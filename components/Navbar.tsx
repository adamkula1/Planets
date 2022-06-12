import Link from "next/link";
import { useRouter } from "next/router";




const Navbar= ({index, overview}:any) => {
  const router = useRouter();

  return (
    <header>
        <p className="logo">The planets</p>

        <nav>
            <ul>
                <li className={router.pathname == "/" ? "mercury" : ""}><Link href="/">Mercury</Link></li>
                <li className={router.pathname == "/Venus" ? "venus" : ""}><Link href="/Venus">Venus</Link></li>
                <li className={router.pathname == "/Earth" ? "earth" : ""}><Link href="/Earth">Earth</Link></li>
                <li className={router.pathname == "/Mars" ? "mars" : ""}><Link href="/Mars">Mars</Link></li>
                <li className={router.pathname == "/Jupiter" ? "jupiter" : ""}><Link href="/Jupiter">Jupiter</Link></li>
                <li className={router.pathname == "/Saturn" ? "saturn" : ""}><Link href="/Saturn">Saturn</Link></li>
                <li className={router.pathname == "/Uranus" ? "uranus" : ""}><Link href="/Uranus">Uranus</Link></li>
                <li className={router.pathname == "/Neptune" ? "neptune" : ""}><Link href="/Neptune">Neptun</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar