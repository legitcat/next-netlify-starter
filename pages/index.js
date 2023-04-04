import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />   
      </Head>

      <main>
        <Header title="Welcome To Site!" />
   
        <div>
            <a style="font-size:30px;" href="/api/ticker"><div className={topside-bin()}></div></a>
        </div>    
    
      </main>

      <Footer />
    </div>
  )
}
