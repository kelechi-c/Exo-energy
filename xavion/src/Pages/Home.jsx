import banner from "../assets/3.jpg";
import Button from "../Components/Button"; 
import Features from "../Components/Features";
import NavBar from "../Components/NavBar";
import Process from "../Components/Process";
import ProjectPlans from "../Components/ProjectPlans";
import Stats from "../Components/Stats";
// import Slideshow from "./Components/Slideshow";
import InfoAssets from "./Info";


const Home = () => {
    return ( 
        <section>

          <header>
            <NavBar/>
          </header>

           <main>
             <Hero img={banner}/>
              <InfoAssets/>

              <section>
                {/* <Slideshow/> */}
                 <Stats/>
                 <Features/>
                 <Process/>
                <ProjectPlans/>
              </section>

           </main>

           <footer>

           </footer>

        </section>
     );
}
 
export default Home;


// eslint-disable-next-line react/prop-types
function Hero({img}) {
    return ( 
        <article className="hero" id="top">
         <div className="banner">
            <img src={img} alt="banner"></img>
                <div className="herotext">
                    <h4 className="text-xs  font-bold">DELIVERING ENERGY SOLUTIONS</h4>
                    <h1 className="text-white text-5xl py-4 my-2">Invest in Oil/Gas and Solar Energy</h1>
                    <Button 
                      className='p-3 text-sm font-semibold bg-white'
                      text='GET STARTED'/>
                </div>
         </div>
        </article>
     );
}