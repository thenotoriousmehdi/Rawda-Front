import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Promo from "../Components/Promo";
import deco1 from "../assets/deco1.png";
import Services from "../Components/service/Services.js";
import Faq from "../Components/Faq/Faq.js";
import deco3 from "../assets/deco3.svg";
import Avis from "../Components/Aviss/Avis";
import AvisCard from "../Components/Aviss/AvisCard";
import FaqCard from "../Components/Faq/FaqCard";
import CrecheCard from "../Components/CrechesMN/CrecheCard";
import Crechesmieuxnotees from "../Components/CrechesMN/Crechesmieuxnotees";
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
      <Services />
      <Avis />
      <Faq />
      <Footer />
    </>
  );
}
export default Home;
