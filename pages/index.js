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

        <div>
            <Link
              style={{

                    .brick {
                      position: relative;
                      width: 320px;
                      /*border-radius: 30px;*/
                      background: #FFFFFF;
                      /*box-shadow: 2px 6px 30px 0 rgba(0,0,0,0.4);*/

                    }

                    /*-----------------------------------*/

                    .topside {
                      position: absolute;
                      top: 32px;
                      left: 1px;
                      height: 125px;
                      width: 145px;
                      background: #2696DD;
                      transform: skewY(30deg);

                    }
                    .topside-bin {
                      transform: rotate(-60deg);
                    }

                    .topside:hover{
                       background-color:yellow;
                    }

                    /*-----------------------------------*/

                    .side1 {
                      position: absolute;
                      top: 152px;
                      left: 178px;
                      height: 48px;
                      width: 145.5px;
                      background: orange;
                      transform: skewY(-30deg);
                    }

                    .side2 {
                      position: absolute;
                      top: 163px;
                      left: 72px;
                      height: 48px;
                      width: 108px;
                      background: orange;
                      transform: skewY(30deg);
                    }

                    div.both1:hover .side1{background-color:yellow; }
                    div.both1:hover .side2{background-color:yellow; }

                    /*-----------------------------------*/


                    .stud1 {
                      position: absolute;
                      top: 115px;
                      left: 95px;
                      width: 36px; 
                      height: 30px; 
                      background: #237FBD;
                      margin-top: 6px;
                      border-radius: 18px / 10px;
                    }
                    .stud1:before {
                      content: ""; 
                      position: absolute;
                      height: 20px;
                      width: 36px;
                      border-radius: 18px / 10px;
                      background: #4CB7FF;
                    }

                    .stud2 {
                      position: absolute;
                      top: 141px;
                      left: 141px;
                      width: 36px; 
                      height: 30px; 
                      background: #237FBD;
                      margin-top: 6px;
                      border-radius: 18px / 10px;
                    }
                    .stud2:before {
                      content: ""; 
                      position: absolute;
                      height: 20px;
                      width: 36px;
                      border-radius: 18px / 10px;
                      background: #4CB7FF;
                    }

                    .stud3 {
                      position: absolute;
                      top: 90px;
                      left: 141px;
                      width: 36px; 
                      height: 30px; 
                      background: #237FBD;
                      margin-top: 6px;
                      border-radius: 18px / 10px;
                    }
                    .stud3:before {
                      content: ""; 
                      position: absolute;
                      height: 20px;
                      width: 36px;
                      border-radius: 18px / 10px;
                      background: #4CB7FF;
                    }

                    .stud4 {
                      position: absolute;
                      top: 115px;
                      left: 187px;
                      width: 36px; 
                      height: 30px; 
                      background: #237FBD;
                      margin-top: 6px;
                      border-radius: 18px / 10px;
                    }
                    .stud4:before {
                      content: ""; 
                      position: absolute;
                      height: 20px;
                      width: 36px;
                      border-radius: 18px / 10px;
                      background: #4CB7FF;
                    }

                    .stud5 {
                      position: absolute;
                      top: 65px;
                      left: 187px;
                      width: 36px; 
                      height: 30px; 
                      background: #237FBD;
                      margin-top: 6px;
                      border-radius: 18px / 10px;
                    }
                    .stud5:before {
                      content: ""; 
                      position: absolute;
                      height: 20px;
                      width: 36px;
                      border-radius: 18px / 10px;
                      background: #4CB7FF;
                    }

                    .stud6 {
                      position: absolute;
                      top: 89px;
                      left: 233px;
                      width: 36px; 
                      height: 30px; 
                      background: #237FBD;
                      margin-top: 6px;
                      border-radius: 18px / 10px;
                    }
                    .stud6:before {
                      content: ""; 
                      position: absolute;
                      height: 20px;
                      width: 36px;
                      border-radius: 18px / 10px;
                      background: #4CB7FF;
                    }
              }}
            >  
                  <div class='topside-bin'>
                    <a style="font-size:30px;" href="/api/ticker"><div class='topside'></div></a>
                  </div>

                  <div class="both1">
                     <a style="font-size:28px;" href="https://pvpython.pythonanywhere.com"><div class='side1'>&nbsp;MySQL</div></a>
                     <a style="font-size:28px" href="https://pvpython.pythonanywhere.com"><div class='side2' align='right'>&nbsp;Python</div></a>
                  </div> 

                  <div class="stud1"></div>
                  <div class="stud2"></div>
                  <div class="stud3"></div>
                  <div class="stud4"></div>
                  <div class="stud5"></div>
                  <div class="stud6"></div>
                  <div class="stud7"></div>
                  <div class="stud8"></div>
            </Link>
              
         </div>      
    
    
      </main>

      <Footer />
    </div>
  )
}
