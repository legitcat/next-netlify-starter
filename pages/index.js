import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const getTopSide = () => {
    return styles["topside"];
  };

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />   
      </Head>

      <main>
        <Header title="Welcome To Site!" />
      
        <div className={getTopSide()}></div>
    
       <h1>Hello</h1>
   
      </main>

      <Footer />
    </div>
  )
}
