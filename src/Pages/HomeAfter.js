import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Promo from "../Components/Promo";
import deco1 from "../assets/deco1.png";
import Services from "../Components/service/Services.js";
import Faq from "../Components/Faq/Faq.js";
import Avis from "../Components/Aviss/Avis";
import AvisCard from "../Components/Aviss/AvisCard";
import FaqCard from "../Components/Faq/FaqCard";
import Crechesmieuxnotees from "../Components/CrechesMN/Crechesmieuxnotees";
import AddAdmin from "./AddAdmin";
import NavAfter from "../Components/NavAfter";

function HomeAfter({creches}) {
  return (
    <>
      <div className="bg-rawdawhite">
        <NavAfter />
        <Hero />
        <div>
          <img src={deco1} />
        </div>
        <About />
        <Crechesmieuxnotees  creches={creches} />
        <Services />
        <Avis />
        <Faq />
        <div className="flex justify-center items-center gap-6 m-4">
          <a href="/VoirProfil"> Profil </a>
          <a href="/Notifications">Notifications </a>
          <a href="/AddCreche">Add Creche </a>
          <a href="/Dashboard">Dashboard </a>
          <a href="/creches">infos creche </a>
          <a href="AddAdmin"> Add Admin</a>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default HomeAfter;
