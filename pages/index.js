import Image from 'next/image'
import Navbar from '../components/navbar.js'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <div 
      style={{ 
        width: '50vw',
      }}
      >
        <h1>Home</h1>
        {/* <Image 
          src="/images/building.jpg" 
          alt="my apartment"
          width="5304" 
          height="7952"
          layout="responsive"
        /> */}
      </div>
      <Head>
        <title>My Next App Home</title>
      </Head>
    </>
  )
}
