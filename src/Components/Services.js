import React from "react";
import Service from "../Components/Service"
import maison from "../assets/maison.svg";
import enfants from "../assets/enfants.svg";
import contact from "../assets/contactillus.svg"
let obj={
  title:["Ajouter votre creche ","Inscrire votre enfant ","Contacter l'autre coté"],
  des:["Plus de 2000 Crèches Dans les 58 wilayas ","Et  50000 enfants inscrits ","Vous êtes responsable ou parent? vous pouvez toujours contacter l'autre coté en envoyant des offres à travers notre service de méssagerie"],
}

export default function Services() {
  return (
    <section
      className=" w-full h-[1700px] md:h-[900px] pt-32 pb-10 "
      id="services"
    >
      <div className="flex flex-col items-center gap md:gap-y-0">
        <p className="  text-center text-3xl md:text-4xl font-bold text-Poppins z-10 ">Nos Services</p>
      <div className="  mb-[20px] mt-[-15px] w-[200px] md:w-[230px] h-[20px] md:mt-[-15px] bg-rawdayellow shadow-rawdayellow "></div></div>
      
      <p className="text-sm md:text-xl font-medium font-Poppins text-rawdapurple text-opacity-70  text-center md:mb-16">Rawda is the best search engine in the world</p>
      <div className="  flex flex-col items-center justify-evenly  h-full md:h-[500px]  md:flex md:flex-row md:justify-evenly">
      <Service img={maison} title={obj.title[0]} description={obj.des[0]}></Service>
      <Service img={enfants} title={obj.title[1]} description={obj.des[1]}></Service>
      <Service img={contact} title={obj.title[2]} description={obj.des[2]}></Service>
      </div>
      
    </section>
  );
}
