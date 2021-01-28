import Head from 'next/head'
import Layout from '../components/layout'

export default function Posts(){
    return(
        <Layout>
            <Head>
                <title>Posts</title>
            </Head>
            <div>
                <h1>Posts</h1>
            </div>
        </Layout>
    )
}