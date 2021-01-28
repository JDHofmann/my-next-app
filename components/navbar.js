import Link from 'next/link'
import style from './navbar.module.css'

export default function Navbar(){
    return(
        <header className={style.header}>
            <Link href="/"><a className={style.navlink}>Home</a></Link>
            <Link href="/posts"><a className={style.navlink}>Posts</a></Link>
            <Link href="/about"><a className={style.navlink}>About</a></Link>
        </header>
    )
}