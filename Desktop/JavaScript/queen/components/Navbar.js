import Image from "next/dist/client/image"
import Link from "next/dist/client/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image src="/images/favicon.ico" width="30" height="30" alt="PokeNext"/>
            <h1>PokeNext</h1>
        </div>
        <ul className={styles.link_items}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>Sobre</a>
                </Link>
            </li>
        </ul>
        </nav>
    )
}