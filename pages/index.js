import Image from 'next/image'

export default function Home() {
  return (
    <div 
    style={{ 
      width: '50vw',
    }}
    >Home
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
