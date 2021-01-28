import Link from 'next/link'

export default function Navbar(){
    return(
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
            <Link href="/about"><a>About</a></Link>
        </header>
    )
}