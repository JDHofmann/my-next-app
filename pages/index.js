import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div 
    style={{ 
      width: '50vw',
    }}
    >
      <Link href="/about"><a>About</a></Link>
      <h1>Home</h1>
      <Image 
        src="/images/building.jpg" 
        alt="my apartment"
        width="5304" 
        height="7952"
        layout="responsive"
      />
    </div>
  )
}
