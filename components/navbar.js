import Link from 'next/link'

export default function Navbar(){
    return(
        <header className='header'>
            <Link href="/"><a className='navlink'>Home</a></Link>
            <Link href="/posts"><a className='navlink'>Posts</a></Link>
            <Link href="/about"><a className='navlink'>About</a></Link>
        </header>
    )
}