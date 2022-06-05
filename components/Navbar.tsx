import Link from "next/link";

type LayoutProps = {
    children: React.ReactNode;
 }

const Navbar: React.FC<LayoutProps> = ({children}) => {

  return (
    <header>
        <p className="logo">The planets</p>

        <nav>
            <ul>
                <li><Link href="/">Mercury</Link></li>
                <li><Link href="/Venus">Venus</Link></li>
                <li><Link href="/Earth">Earth</Link></li>
                <li><Link href="/Mars">Mars</Link></li>
                <li><Link href="/Jupiter">Jupiter</Link></li>
                <li><Link href="/Saturn">Saturn</Link></li>
                <li><Link href="/Uranus">Uranus</Link></li>
                <li><Link href="/Neptun">Neptun</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar