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
   
        <div>
          <h1><a href="https://pvpython.pythonanywhere.com">PV Python Home</a></h1>
        </div>
    
      </main>

      <Footer />
    </div>
  )
}
