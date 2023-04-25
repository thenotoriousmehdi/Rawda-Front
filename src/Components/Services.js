import React from "react";
import Service from "./Service.js";
import maison from "../assets/maison.svg";
import enfants from "../assets/enfants.svg";
import contact from "../assets/contactillus.svg";
let obj = {
  title: [
    "Ajouter votre creche ",
    "Inscrire votre enfant ",
    "Contacter l'autre coté",
  ],
  des: [
    "Vous cherchez à promouvoir les activités exceptionnelles proposées par votre crèche pour les enfants et vous ne savez pas comment? En ajoutant votre crèche à notre répertoire vous pourrez dire adieu à toute disponibilité restante dans votre établissement",
    "Vous recherchez une crèche qui prendra soin de votre enfant avec autant d'attention que si vous étiez à ses côtés? Et pas que vous souhaitez même l'inscrire  dans l'établissement qui vous convient sans avoir à vous déplacer? N'allez pas plus loin, rawda vous permet de le faire en ligne.",
    "Vous êtes responsable ou parent? vous pouvez toujours contacter l'autre coté en envoyant des offres à travers notre service de méssagerie",
  ],
};

export default function Services() {
  return (
    <section
      className=" w-full h-[1700px] md:h-[900px] pt-32 pb-10 "
      id="services"
    >
      <div className="flex flex-col items-center gap md:gap-y-0">
        <p className="  text-center text-3xl md:text-4xl font-bold text-Poppins z-10 ">
          Nos Services
        </p>
        <div className="  mb-[20px] mt-[-15px] w-[200px] md:w-[230px] h-[20px] md:mt-[-15px] bg-rawdayellow shadow-rawdayellow "></div>
      </div>

      <p className="text-sm md:text-xl font-medium font-Poppins text-rawdapurple text-opacity-70  text-center md:mb-2">
        Rawda vous offre un voyage sans précédent dans le monde des crèches en
        Algérie
      </p>
      <div className="  flex flex-col items-center justify-evenly  h-full md:h-[500px]  md:flex md:flex-row md:justify-evenly ">
        <Service
          img={maison}
          title={obj.title[0]}
          description={obj.des[0]}
        ></Service>
        <Service
          img={enfants}
          title={obj.title[1]}
          description={obj.des[1]}
        ></Service>
        <Service
          img={contact}
          title={obj.title[2]}
          description={obj.des[2]}
        ></Service>
      </div>
    </section>
  );
}
