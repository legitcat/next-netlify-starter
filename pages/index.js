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
                  <a style="font-size:30px;" href=""><div class='topside'></div></a>
                </div>

                <div className="both1">
                   <a style="font-size:28px;" href="/api/ticker"><div className='side1'> Ticker</div></a>
                   <a style="font-size:28px" href="/api/ticker"><div className='side2' align='right'>API</div></a>
                </div>      

                <div className="stud1"></div>
                <div className="stud2"></div>
                <div className="stud3"></div>
                <div className="stud4"></div>
                <div className="stud5"></div>
                <div className="stud6"></div>
    
             </div>

           </div>
    
 
      </main>

      <Footer />
    </div>
    

  )
}
