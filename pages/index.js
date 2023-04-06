import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (        
   
        <div>
          <Head>
            <title>Next.js Starter!</title>
            <link rel="icon" href="/favicon.ico" />   
          </Head>

          <main> 
             <div className="brick">
                <div className='topside-bin'>
                  <a href=""><div className='topside'></div></a>
                </div>

                <div className="both1">
                   <a href="https://pvpython.pythonanywhere.com"><div className='side2'>Python&nbsp;</div></a>
                   <a href="https://pvpython.pythonanywhere.com"><div className='side1'>&nbsp;MySql</div></a>

                </div> 

                <div className="stud1"></div>
                <div className="stud2"></div>
                <div className="stud3"></div>
                <div className="stud4"></div>
                <div className="stud5"></div>
                <div className="stud6"></div>
             </div>
    
             <br/>
             <image src="./netifly.png" alt="netifly"/>

          </main>    

        </div>  
    
        <div>
           <link rel="icon" href="/favicon.ico" /> 
        
        </div>
       

  )
}
