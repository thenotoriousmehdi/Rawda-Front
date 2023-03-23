import illus11 from "../assets/illus11.svg";

export default function Hero() {
  return (
    <section id="hero">
      <div
        className="container flex flex-wrap p-6 md:flex-row 
        items-center justify-between px-6 mx-auto mt-10 space-y-0 md:space-y-0"
      >
        <div className="flex flex-col mb-32 gap-4 md:w-1/2">
          <h1
            className="max-w-md text-4xl font-bold text-left text-rawdapurple
            md:text-4xl md:textleft"
          >
            Le 1er moteur de recherche de crèches en Algérie
          </h1>
          <p className=" max-w-sm text-left text-rawdablack md:text-left">
            Rechercher la crèche qui vous convient, et soyez sur que votre
            enfant est entre de bonnes mains.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              href="#"
              className="p-3 px-6 pt-2 text-rawdawhite bg-rawdapurple rounded-full baseline"
            >
              {" "}
              Commencer{" "}
            </button>
          </div>
          
        </div>
        <div className=" md:w-[220px]  ">
          <img lassName=" md:h-[300px] " src={illus11} alt="logorawda" />
        </div>
      </div>
    </section>
  );
}
