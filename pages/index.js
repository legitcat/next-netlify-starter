import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />   
      </Head>

      <main>
        <Header title="Welcome To Site!" />
      
       <div classNam e="container">
          <div className="topside-bin">
             <a href=""><div className='topside'></div></a>
          </div>
       </div>
   
      </main>

      <Footer />
    </div>
  )
}
