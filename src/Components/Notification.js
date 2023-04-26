import linenotif from "../assets/linenotif.svg";
import mehdi from "../assets/mehdi.jpeg";
import croix from "../assets/croix.svg";
function Notification({ type, photo, nomc, heuree, heure, date, num, email }) {
  return (
    <div className="flex flex-col bg-rawdawhite w-[360px] md:w-[720px] h-[365px] md:h-[250px] border border-rawdapurple rounded-md">

      <div className="flex bg-rawdapurple bg-opacity-50 w-[360px] md:w-[720px] h-[60px] rounded-t-md p-4 pl-6 justify-between">
        {" "}
        {/* flex top */}
        <h1 className="text-white font-bold">{type}</h1>
        <img className="h-[15px]" src={croix} />
      </div>


      <div className="flex flex-wrap md:gap-[140px]">



        <div className="container  w-[300px] md:w-[420px] h-[60px] ">
          {" "}
          {/* flex nom prenom et line */}
          <div className="flex ml-8 md:ml-0 justify-items-stretch gap-6">
            <div className="ml-1 md:ml-6 mt-[4px]">
              <img className=" h-[180px] w-[6px]" src={linenotif} />
            </div>

            <div className="mt-[30px] flex flex-col gap-4">
              {" "}
              {/*  flex cote droit du line*/}
              <div className="flex justify-items-stretch gap-4">
                {" "}
                {/* flex nom photo date */}
                <img className="h-[23px] w-[23px] rounded-full" src={photo} />
                <h2 className="flex text-sm">{nomc}</h2>
                <h3 className="flex text-[#475467] text-xs font-light">
                  Depuis {heuree}H
                </h3>
              </div>
              <div>
                {" "}
                {/* text */}
                <p className="font-light text-xs ">
                  Je suis {nomc}, je veux prendre un rendez vous pour une
                  consultation le {date}, a {heure} pour visiter vos
                  installations et discuter des options de garde disponibles.
                </p>
              </div>
              <div className="flex gap-4">
                {" "}
                {/* flex num et email */}
                <h3 className="text-sm font-thin text-rawdapurple bg-[#D9D9D9]">
                  {num}
                </h3>
                <h3 className="text-sm font-thin text-rawdapurple bg-[#D9D9D9]">
                  {email}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col ml-[80px] md:ml-[0px] items-center flex-wrap gap-4 mt-[170px] md:mt-[46px]">
          {" "}
          {/* flex buttons */}
          <div>
            <a href="/posturad">
              <button
                id="accept"
                type="button"
                className="rounded-full font-medium text-sm bg-[#37BB5C] bg-opacity-80 px-4 py-2 text-white hover:bg-[#37BB5C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
              >
                Accepter
              </button>
            </a>
          </div>
          <div>
            <a href="/posturad">
              <button
                id="refuser"
                type="button"
                className="rounded-full font-medium text-sm bg-[#EE4C4C] bg-opacity-60 px-[21px] py-2 text-white hover:bg-[#EE4C4C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
              >
                Refuser
              </button>
            </a>
          </div>
        </div>



      </div>
    </div>
  );
}
export default Notification;
