import arrowleft from "../assets/arrowleft.svg";
import arrowright from "../assets/arrowright.svg";
import deco1 from "../assets/deco1.png";
import maison from "../assets/maison.svg";
import enfants from "../assets/maison.svg";

function Promo() {
  return (
    <div id="Promo" className="mx-8 bg-opacity-5 bg-rawdapurple my-8 ">
      <div className="mx-auto  sm:px-6 lg:px-10 ">
        <div className="flex flex-row justify-between p-4">
          <div className="flex flex-col mb-32 gap-4 md:w-1/2">
            <h1
              className="max-w-md text-4xl font-bold text-left text-rawdapurple
            md:text-5xl md:textleft"
            >
              Plus de 2000 Crèches Dans les 58 wilayas
            </h1>
            <div className="flex justify-center md:justify-start">
              <button
                href="#"
                className="p-3 px-6 pt-2 text-rawdawhite bg-rawdapurple rounded-full baseline "
              >
                {" "}
                Ajouter ma creche{" "}
              </button>
            </div>
          </div>

          <div className="p-4 m-4relative w-24 h-24 md:w-64 md:h-64 bg-rawdayellow bg-opacity-60 rounded-full flex justify-center items-center text-center  shadow-xl">
            <img className=" md:h-[300px] " src={maison} alt="illusEcole" />
          </div>
        </div>

        <div className="flex flex-row justify-between p-4">
          <div className="p-4 m-4relative w-24 h-24 md:w-64 md:h-64 bg-rawdapurple bg-opacity-60 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
            <img className=" md:h-[300px] " src={enfants} alt="illusEnfants" />
          </div>

          <div className="flex flex-col mb-32 gap-4 md:w-1/2">
            <h1
              className="max-w-md text-4xl font-bold text-left text-rawdapurple
            md:text-5xl md:textleft"
            >
              Et 50000 enfants inscrits
            </h1>
            <div className="flex justify-center md:justify-start">
              <button
                href="#"
                className="p-3 px-6 pt-2 text-rawdawhite bg-rawdapurple rounded-full baseline "
              >
                {" "}
                Inscrire mon enfant{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Promo;
