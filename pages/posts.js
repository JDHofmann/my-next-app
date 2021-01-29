import Head from 'next/head'

export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <div>
                <h1>Posts</h1>
            </div>
            <style jsx>{`
                div {
                    background: #00a000;
                } 
                h1 {
                    color: #ffffff;
                    text-align: center;
                }
            }
            `}</style>
        </>
    )
}