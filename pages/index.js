import Image from 'next/image'
import Navbar from '../components/navbar.js'


export default function Home() {
  return (
    <>
      <Navbar />

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
    </>
  )
}
