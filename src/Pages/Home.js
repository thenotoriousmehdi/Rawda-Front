import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import About from "../Components/About";
import deco1 from "../assets/deco1.png";
import Services from "../Components/service/Services.js";
import Faq from "../Components/Faq/Faq.js";
import Avis from "../Components/Aviss/Avis";
import Crechesmieuxnotees from "../Components/CrechesMN/Crechesmieuxnotees";
import Team from "../Components/Team/Team";
import Nav from "../Components/Nav";
function Home({ creches }) {
  return (
    <>
      <div className="bg-rawdawhite">
      
       <Nav/>
        <Hero />
        <div>
          <img src={deco1} />
        </div>
        <About />
        <Crechesmieuxnotees creches={creches} />
        <Services />
        <div className="hidden sm:block">
          <Team />{" "}
        </div>

        <Avis />
        <Faq />
        <Footer />
      </div>
    </>
  );

}
export default Home;
