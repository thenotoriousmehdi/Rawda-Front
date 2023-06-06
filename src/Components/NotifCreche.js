import linenotif from "../assets/linenotif.svg";
import croix from "../assets/croix.svg";
import eye from "../assets/eye.svg";
import axios from 'axios'
function NotifCreche({nomc, nomcreche, heuree, email}) {
  const sendEmail = async (email, message) => {
    try {
      await axios.post('http://localhost:8000/send-email', {
        name: nomc,
        email: email,
        message: message,
      });
      console.log('Email sent successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccepterClick = () => {
    sendEmail(email,'Bonjour\nVotre demande d ajout de votre crèche a été acceptée.\nCordialement.');
  };

  const handleRefuserClick = () => {
    sendEmail(email,'Bonjour\nVotre demande d ajout de votre creche a été malheureusement refusée.\nCordialement.');
  };
  return (
    <div className="flex flex-col bg-rawdawhite w-[360px] md:w-[720px] h-[365px] md:h-[250px] border border-rawdapurple rounded-md">
      <div className="flex bg-rawdapurple bg-opacity-50 w-[360px] md:w-[720px] h-[60px] rounded-t-md p-4 pl-6 justify-between">
        {" "}
        {/* flex top */}
        <h1 className="text-white font-bold">Demande d’ajout d’une Crèche </h1>
        <img className="h-[15px]" src={croix} />
      </div>

      <div className="flex flex-wrap md:gap-[140px]">
        <div className="container  w-[300px] md:w-[420px] h-[60px] ">
          {" "}
          {/* flex nom prenom et line */}
          <div className="flex ml-8 md:ml-0 justify-items-stretch gap-6">

            <div className="ml-1 md:ml-6 mt-[4px]">
              <img className=" h-[160px] w-[6px]" src={linenotif} />
            </div>

            <div className="mt-[30px] flex flex-col gap-4">

              {" "}
              {/*  flex cote droit du line*/}
              <div className="flex justify-items-stretch gap-4">
                {" "}
                {/* flex nom photo date */}
  
                <h2 className="flex text-sm">{nomc}</h2>
                <h3 className="flex text-[#475467] text-xs font-light">
                  Depuis {heuree}H
                </h3>
              </div>
              <div>
                {" "}
                {/* text */}
                <p className="font-light text-xs ">
                Bonjour, je suis {nomc} et je souhaite ajouter ma crèche ({nomcreche}) dans votre site.  
                </p>
              </div>

<div className="flex justify-between bg-rawdapurple  bg-opacity-50 p-1 w-[210px]" >

<div>
    <h4 className="text-rawdawhite text-xs">
    Voir les details de la crèche
    </h4>
</div>

<div>
    <a href="">
    <img  
src={eye}
/> 
    </a>


</div>



</div>


              <div className="flex gap-4">
                {" "}
                {/* flex num et email */}
                
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
              <button
                id="accept"
                type="button"
                className="rounded-full font-medium text-sm bg-[#37BB5C] bg-opacity-80 px-4 py-2 text-white hover:bg-[#37BB5C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                onClick={handleAccepterClick}
              >
                Accepter
              </button>
          </div>
          <button
                id="refuser"
                type="button"
                className="rounded-full font-medium text-sm bg-[#E53E3E] bg-opacity-80 px-4 py-2 text-white hover:bg-[#E53E3E]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                onClick={handleRefuserClick}
            >
              Refuser
            </button>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotifCreche;
