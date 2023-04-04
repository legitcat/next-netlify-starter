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
    
           <div class="container">
              <div class="brick" style="background-color:black;">

                <div class='topside-bin'>
                  <a style="font-size:30px;" href="/api/ticker"><div class='topside'></div></a>
                </div>

                <div class="both1">
                   <a style="font-size:28px;" href="/api/ticker"><div class='side1'> Ticker</div></a>
                   <a style="font-size:28px" href="/api/ticker"><div class='side2' align='right'>API</div></a>
                </div>      

                <div class="stud1"></div>
                <div class="stud2"></div>
                <div class="stud3"></div>
                <div class="stud4"></div>
                <div class="stud5"></div>
                <div class="stud6"></div>

              </div>

           </div>
 
      </main>

      <Footer />
    </div>
    

  )
}
