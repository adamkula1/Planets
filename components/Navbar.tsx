import Link from "next/link";



const Navbar= () => {

  return (
    <header>
        <p className="logo">The planets</p>

        <nav>
            <ul>
                <li className="mercury"><Link href="/">Mercury</Link></li>
                <li className="venus"><Link href="/venus">Venus</Link></li>
                <li className="earth"><Link href="/Earth">Earth</Link></li>
                <li className="mars"><Link href="/Mars">Mars</Link></li>
                <li className="jupiter"><Link href="/Jupiter">Jupiter</Link></li>
                <li className="saturn"><Link href="/Saturn">Saturn</Link></li>
                <li className="uranus"><Link href="/Uranus">Uranus</Link></li>
                <li className="neptun"><Link href="/Neptun">Neptun</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar