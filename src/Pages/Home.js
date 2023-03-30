import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import About from "../Components/About"; 
import Promo from "../Components/Promo";
import deco1 from "../assets/deco1.png";
import Services from "../Components/Services";
 function Home(){
return (
    <>
     <Header /> 
     <Hero /> 
     <div>
            <img src={deco1} />
          </div>
     <About />
     {/* <Promo /> */}
     <Services />
     <Footer />
    </>
);
 }
 export default Home;
