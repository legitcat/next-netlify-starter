import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    
      <main> 
    
           <div className="container">
            <div className="brick">

                <div className='topside-bin'>
                  <a href=""><div className='topside'></div></a>
                </div>

                <div className="both1">

                       <a href="https://pvpython.pythonanywhere.com"><div className='side1'> Ticker</div></a>
                   <a href="https://pvpython.pythonanywhere.com"><div className='side2'>API</div></a>
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


  )
}
