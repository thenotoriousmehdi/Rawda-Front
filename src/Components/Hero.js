import illus11 from "../assets/illus11.svg";

export default function Hero() {
  return (
    <section id="hero">
      <div
        className="container flex flex-wrap-reverse pt-6 pb-1  md:flex-row 
        items-center justify-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:gap-36"
      >
        <div className="flex flex-col mb-32 gap-4 md:w-1/2">
          
          <div className="flex flex-col gap-2"> 
            <p
              className="  max-w-md text-4xl font-bold text-left text-rawdapurple
            md:text-4xl md:textleft z-10"
            >
              {" "}
              Le 1er moteur de recherche de crèches
            </p>
           
          <div className="flex flex-col items-start md:items-start gap md:gap-y-0 ">
            <p
              className="  max-w-md text-4xl font-bold text-left text-rawdapurple
            md:text-4xl md:textleft z-10"
            >
              {" "}
              En Algérie.
            </p>
            <div className="  mb-[0.5px] w-[175px] mt-[-15px] md:w-[180px] h-[20px] md:mt-[-15px] bg-rawdayellow shadow-rawdayellow "></div>
          </div>
          </div>

          {/*  <h1
            className="max-w-md text-4xl font-bold text-left text-rawdapurple
            md:text-4xl md:textleft"
          >
            Le 1er moteur de recherche de crèches en Algérie
          </h1> */}
          <p className=" max-w-sm text-left text-rawdablack md:text-left">
            Rechercher la crèche qui vous convient, et soyez sur que votre
            enfant est entre de bonnes mains.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              
              className="p-3 px-6  text-rawdawhite bg-rawdapurple rounded-full baseline  hover:bg-rawdapurple hover:bg-opacity-80 shadow-sm shadow-rawdapurple"
            >
            
          <a href="/Search"> Commencer </a>    
            </button>
          </div>
        </div>
        <div className=" md:w-[220 px] my-6 py-6 ">
          <img className=" md:h-[300px] " src={illus11} alt="logorawda" />
        </div>
      </div>
    </section>
  );
}
