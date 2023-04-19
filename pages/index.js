import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

  function opennav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closenav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function closeForm() {
     document.getElementById("contact").style.display = "none";
     document.getElementById("about").style.display = "none";
  }

  function openContact() {
     document.getElementById("contact").style.display = "block";
     document.getElementById("mySidenav").style.width="0";
  }

  function openAbout() {
     document.getElementById("about").style.display = "block";
     document.getElementById("mySidenav").style.width="0";
  }


export default function Home() {

  return (  

    <body>    
   
        <div className="div1">

           <div className="form-popup" id="contact">
              <div className="form-container">
                 <h1>Contact</h1>
                 <a href='#'>Paul Valladares</a> <p></p>
                 <a href='#'>paulvalladares@gmail.com</a> <p></p>
                 <button type="button" onClick={closeForm}>Close</button>
              </div>
           </div>

           <div className="form-popup" id="about">
              <div className="form-container" >
                 <h1>About</h1>
                 <a href='#'>Author: Paul Valladares</a> <p></p>
                 <a href='#'>Web Demo</a> <p></p>
                 <button type="button" onClick={closeForm}>Close</button>
             </div>
           </div>


           <div id="mySidenav" className="sidenav">
              <a href="javascript:void(0)" className="closebtn" onClick={closenav}> &times;</a>
              <a href="https://legitcat.github.io">Home</a>
              <a href="#" onClick={openAbout}>About</a>
              <a href="#" onClick={openContact}>Contact</a>
           </div>

           <button className= "hamburger" onClick={opennav}>&#9776;</button>


           <main> 

             <div className="brick">
                <div className='topside-bin'>
                  <a href=""><div className='topside'></div></a>
                </div>

                <div className="both1">
                   <a href="https://pvpython.pythonanywhere.com"><div className='side2'>Python&nbsp;</div></a>
                   <a href="https://pvpython.pythonanywhere.com"><div className='side1'>&nbsp;MySql</div></a>
                </div> 
    
                <div className="both2">
                   <a href="https://github.com/legitcat/"><div className='side4'>&nbsp;Repo</div></a>
                   <a href="https://github.com/legitcat/"><div className='side3'>GitHub&nbsp;</div></a>

                </div>

                <div className="both3">
                   <a href="https://legitcat.github.io/blog/"><div className='side5'>Blog&nbsp;</div></a>
                   <a href="https://legitcat.github.io/blog/about/"><div className='side6'>About&nbsp;</div></a>
                </div>

                <div className="stud1"></div>
                <div className="stud2"></div>
                <div className="stud3"></div>
                <div className="stud4"></div>
                <div className="stud5"></div>
                <div className="stud6"></div> 
  
                </div>   

                <div className="img1">

             </div>   

           </main>  

         <Footer/>

        </div> 

    </body> 

  )

}


