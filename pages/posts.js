import Navbar from '../components/navbar.js'
import Head from 'next/head'

export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Navbar />
            <div>
                <h1>Posts</h1>
            </div>
        </>
    )
}