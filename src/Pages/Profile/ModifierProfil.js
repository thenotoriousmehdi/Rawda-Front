import NavAfter from "../../Components/NavAfter";
import mehdi from "../../assets/mehdi.jpeg";
import line from "../../assets/line.svg";
import line2 from "../../assets/line2.svg";
import Footer from "../../Components/Footer";
import axios from "axios";
import iconm from "../../assets/iconmodphoto.svg";
import React, {useState} from 'react';
function ModifierProfil({nomc,role}){
  const handlePatchClick = () => {
    const requestBody = {   };
    axios.patch(' http://localhost:8000/modifierProfile', requestBody)
      .then(response => {
        // Handle successful response here
      })
      .catch(error => {
        console.error(error);
        // Handle error here
      });
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

return(

    <>

    
   
    <div id="Modifierprofile" className="flex justify-items-center items-center justify-center md:mx-12 mx-6 mt-36 bg-opacity-10 bg-rawdapurple w-[333px]  md:w-[500px] h-full mb-6 rounded-xl ">
        <div className="mx-auto  ">
            <div className="relative flex-col mx-2 my-2  justify-center items-center md:mb-10 mb-4">

                <div className="flex flex-col gap-4">

                    <div className="flex justify-center gap">
                        <img
                            className="mt-[-40px] md:mt-[-70px] ml-[50px] mr-[50px] h-[70px] w-[70px] md:h-[130px] md:w-[130px] rounded-full z-30 border-2 border-rawdapurple border-opacity-100 "
                            src={mehdi}

                            alt="" />
                    </div>


<div className="flex flex-col gap-2">

<div className="flex justify-center text-rawdablack text-xl font-medium font-Poppins ">
<h1>
  {nomc}
</h1>
</div>

<div className="flex justify-center text-[#475467]  font-light">
<h4>
   {role}
</h4>
</div>

<div className="w-[350px]">
    <img src={line}/>
</div>

</div>


<div className="mt-4 ml-8 md:ml-0 flex justify-items-stretch gap-4">
<img    src={line2}/>

<div className=" mx-2 flex flex-col gap-1">

<div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
<h4>
    Email
</h4>
</div>
<div className=" flex justify-start text-[#475467]  font-light">

</div>
</div>
</div>



<div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
<img    src={line2}/>
<div className="mt-1 mx-2 flex flex-col gap-1">
<div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
<h4>
Numéro de téléphone 
</h4>
</div>
<div className=" flex justify-start text-[#475467]  font-light">

<div >
                             <input
                             type="text"
                             id="Numero"
                              placeholder="Numero"
                            required
                           className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                           />
                           </div>

</div>

</div>
</div>

<div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
<img    src={line2}/>
<div className="mt-1 mx-2 flex flex-col gap-1">

<div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
<h4>
Date de naissance
</h4>
</div>
<div className=" flex justify-start text-[#475467]  font-light">

<div >
                             <input
                             type="text"
                             id="Date de naissance"
                              placeholder="Date de naissance"
                            required
                           className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                           />
                           </div>

</div>

</div>
</div>



<div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
<img    src={line2}/>
<div className="mt-1 mx-2 flex flex-col gap-1">

<div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
<h4>
Adresse
</h4>


</div>
<div className=" flex justify-start text-[#475467]  font-light">
<h4>
<div >
                             <input
                             type="text"
                             id="Adresse"
                              placeholder="Adresse"
                            required
                           className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                           />
                           </div>
</h4>
</div>

</div>
</div>


<div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
<img    src={line2}/>
<div className="mt-1 mx-2 flex flex-col gap-1">

<div className=" rounded-xl w-[250px]  h-[38px] md:w-[330px]  bg-rawdapurple bg-opacity-50 hover:bg-rawdapurple border-rawdapurple border-opacity-80 border py-1 px-2 mx-4  text-rawdawhite   shadow-sm text-base ">
<button 
onClick={handleButtonClick}
>
Modifier le Mot de passe

</button>

{showPopup && (
        <div className="popup">
         
<div className="bg-white p-4 shadow-md rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> 

<div className="flex flex-col gap-2"> 
<div className=" flex justify-start text-[#475467]  font-light">
<h4>
<div >
                             <input
                            type="password"
                            id="old password"
                            placeholder="Mot de passe actuel"
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                            minlength="8"
                            maxlength="20"
                            required
                            className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                           />
                           </div>
</h4>
</div>

<div className=" flex justify-start text-[#475467]  font-light">
<h4>
<div >
                             <input
                             type="password"
                             id="new password"
                             pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                             minlength="8"
                             maxlength="20"
                             placeholder="Nouveau Mot de passe"
                             required
                             className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                           />
                           </div>
</h4>
</div>

<div className=" flex justify-start text-[#475467]  font-light">
<h4>
<div >
                             <input
                             type="password"
                             id="confirm new password"
                             pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                             minlength="8"
                             maxlength="20"
                             placeholder="Confirmer le nouveau Mot de passe"
                             required
                             className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                           />
                           </div>
</h4>
</div>

</div>



<div className="mt-6 flex flex-wrap justify-center gap-4"> 

<a >
                    <button
                    onClick={handleClosePopup}
                      id="Annuler la  modifictaion"
                      type="button"
                      className="rounded-full font-medium text-lg bg-rawdawhite px-4 py-2 text-rawdapurple hover:bg-rawdapurple hover:bg-opacity-50 hover:text-rawdawhite  "
                    >
                    Annuler
                    </button>
                  </a>

                  <a >
                    <button
                    onClick={handlePatchClick}
                      id="Confirmer la modification"
                      type="button"
                      className="rounded-full font-medium text-lg bg-rawdapurple px-4 py-2 text-rawdawhite  hover:bg-rawdapurple hover:bg-opacity-20 hover:text-rawdapurple "
                    >
                    Confirmer
                    </button>
                  </a>



</div>




  </div>
         
        </div>
      )}

</div>


</div>
</div>







<div className="mt-6 flex flex-wrap justify-center gap-4"> 

<a >
                    <button
                      id="Annuler la  modifictaion"
                      type="button"
                      className="rounded-full font-medium text-lg bg-rawdawhite px-4 py-2 text-rawdapurple hover:bg-rawdapurple hover:bg-opacity-50 hover:text-rawdawhite  "
                    >
                    Annuler
                    </button>
                  </a>

                  <a >
                    <button
                    onClick={handlePatchClick}
                      id="Confirmer la modification"
                      type="button"
                      className="rounded-full font-medium text-lg bg-rawdapurple px-4 py-2 text-rawdawhite  hover:bg-rawdapurple hover:bg-opacity-20 hover:text-rawdapurple "
                    >
                    Confirmer
                    </button>
                  </a>



</div>


                </div>
            </div>
        </div>
    </div>
   
   
   
    </>










    
    
    
    
        

);

} 
export default ModifierProfil;