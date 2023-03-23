
import React from "react";
import Image from "../assets/Image.png";

const About = () => {
  return (
    <div id="about" className="flex flex-row opacity-30 bg-violet-700  ">
      <div className=" flex justify-center w-1/6 items-center ml-4 h-40">
        <img height={300} width={10} alt="deco"></img>
      </div>
      <div className=" flex flex-wrap md:w-4/6 w-full justify-center items-center">
        <div className="relative flex-wrap w-full h-max justify-center items-center md:mb-10 mb-4">
          <h1
            className=" text-4xl font-bold text-center text-black justify-center
            md:text-4xl md:center"
          >
            A propos de Rawda.
          </h1>

          <text className="text-white mt-20 font-light md:text-xl text-xl leading-9 text-center justify-center font-sans mb-36">
            Rawda est un moteur de recherche de crèches en Algérie. Nous
            comprenons à quel point le choix de la crèche est crucial pour le
            développement de votre enfant. C'est pourquoi nous avons créé Rawda.
            Notre mission est de vous permettre de trouver une crèche de qualité
            pour votre enfant tout en préservant vos informations personnelles.
            De plus, Rawda est une vitrine en ligne pour les propriétaires de
            crèches. vous pouvez pas imaginer le temps que rawda vous fait
            gagner ! Essayez Rawda dès maintenant et profitez de toutes les
            fonctionnalités qu'elle offre.
          </text>
        </div>
      </div>
    </div>
  );
};

export default About;
