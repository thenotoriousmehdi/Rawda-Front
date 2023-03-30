import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import About from "../Components/About"; 
import Promo from "../Components/Promo";
import deco1 from "../assets/deco1.png";

 function Home(){
return (
    <>
     <Header /> 
     <Hero /> 
     <div>
            <img src={deco1} />
          </div>
     <About />
     <Promo />
     <Footer />
    </>
);
 }
 export default Home;
