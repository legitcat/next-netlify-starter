import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link';

const getBrick = () => {
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
   
        <div>
            <button className={getBrick()} onClick={handleMovClick}>
        </div>    
    
      </main>

      <Footer />
    </div>
  )
}
