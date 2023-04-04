import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./styles/popup.css"></link>
        <link rel="stylesheet" href="./styles/popup2.css"></link>
    
        <style>
            body {
              font-family: "Lato", sans-serif;
            }

            .sidenav {
              height: 100%;
              width: 0;
              position: fixed;
              z-index: 1;
              top: 0;
              left: 0;
              background-color: black;
              overflow-x: hidden;
              transition: 0.5s;
              padding-top: 30px;
            }

            .sidenav a {
              padding: 8px 8px 8px 32px;
              text-decoration: none;
              font-size: 25px;
              color: white;
              display: block;
              transition: 0.3s;
            }

            .sidenav a:hover {
              color: #f1f1f1;
            }

            .sidenav .closebtn {
              position: absolute;
              top: 0;
              font-size: 36px;
              margin-left: 0px;
            }


            @media screen and (max-height: 450px) {
              .sidenav {padding-top: 15px;}
              .sidenav a {font-size: 18px;}
            }
            </style>


            <script>

              function openForm(type) {

                 document.getElementById("contact").style.display = "none";
                 document.getElementById("about").style.display = "none";

                 if (type=='contact'){
                    document.getElementById("contact").style.display = "block";
                  }
                 else if  (type=='about'){
                    document.getElementById("about").style.display = "block";
                  }

              }

              function closeForm() {

                 <!--hide popups-->
                 document.getElementById("contact").style.display = "none";
                 document.getElementById("about").style.display = "none";
              }

            </script>

            <script>

              function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
              }

              function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
              }

            </script>
    
      </Head>

      <main>
        <Header title="Welcome To Site123!" />
    
       <h1>Quick brown fox trot</h1>
    
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
