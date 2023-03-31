import deco2 from "../assets/deco2.svg";
 
 const About = () => {
  return (
    <div id="about" className="mx-8  bg-opacity-30 bg-rawdapurple  ">
       <div className="mx-auto  sm:px-6 lg:px-10 ">
        <div className="relative flex-col mx-2 my-2 w-full h-max justify-center items-center md:mb-10 mb-4"> 
      <div className="container flex flex-wrap p-8  md:flex-row 
        items-center justify-between px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col gap-8">


          <div className="flex flex-col items-center gap md:gap-y-0 ">
        <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10">  A propos de Rawda.</p>
      <div className="  mb-[0.5px] mt-[-15px] w-[100px] md:w-[325px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div></div>



          <div>
          <text className="text-rawdawhite mt-20 font-light md:text-xl text-xl leading-9 text-center justify-center mb-8">
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


       

      </div>


      
      </div>
      <div className="flex justify-end">
<img className=" h-[30px] " src={deco2} alt="deco" />
</div>

      

    </div>

    
  );
};

export default About;
 




