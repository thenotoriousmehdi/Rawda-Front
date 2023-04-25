import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Promo from "../Components/Promo";
import deco1 from "../assets/deco1.png";
import Services from "../Components/Services.js";
import Faq from "../Components/Faq.js";
import Avis from "../Components/Avis";
import AvisCard from "../Components/AvisCard";
import FaqCard from "../Components/FaqCard";
import CrecheCard from "../Components/CrecheCard";
import Crechesmieuxnotees from "../Components/Crechesmieuxnotees";
function Home() {
  return (
    <>
      <Header />
      <Hero />

      <div>
        <img src={deco1} />
      </div>
      <About />
      <Crechesmieuxnotees />
      {/*  <CrecheCard/> */}
      {/* <Promo /> */}
      <Services />

      {/* <div className="flex justify-end">
<img className=" md:h-[300px] " src={deco3} alt="deco3" />
</div> */}
      {/*   <Avis />  */}
      {/*   <AvisCard /> */}
      <Faq />

      <Footer />
    </>
  );
}
export default Home;
