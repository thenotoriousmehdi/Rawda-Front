/*import NavAfter from "../Components/NavAfter";
import mehdi from "../assets/mehdi.jpeg";
import line from "../assets/line.svg";
import line2 from "../assets/line2.svg";
import Footer from "../Components/Footer";
function Profile ({photo,nomc,role,email,num,daten,adresse,EI}) {
return(

   

    <>
    <div className="bg-rawdawhite"> 
    <NavAfter />
    <div id="profile" className="flex justify-items-center md:ml-[180px] md:mx-12 mx-6 mt-20 bg-opacity-10 bg-rawdapurple w-[333px]  md:w-[600px] h-full mb-6 rounded-xl ">
        <div className="mx-auto  ">
            <div className="relative flex-col mx-2 my-2  justify-center items-center md:mb-10 mb-4">

                <div className="flex flex-col gap-4">

                    <div className="flex justify-center gap">
                        <img
                            className="mt-[-40px] md:mt-[-70px] ml-[50px] mr-[50px] h-[70px] w-[70px] md:h-[130px] md:w-[130px] rounded-full z-30 border-2 border-rawdapurple border-opacity-100 "
                            src={photo}

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
<h4>
    {email}
</h4>
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
<h4>
{num}
</h4>
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
<h4>
{daten}
</h4>
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
{adresse}
</h4>
</div>

</div>
</div>



<div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
<img    src={line2}/>
<div className="mt-1 mx-2 flex flex-col gap-1">

<div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
<h4>
Enfants inscris
</h4>
</div>
<div className=" flex justify-start text-[#475467]  font-light">
<h4>
{EI}
</h4>
</div>

</div>
</div>





<div className="mt-6 flex flex-wrap justify-center"> 

<div className="flex justify-center md:justify-center">
    <button
      href="#"
      className="p-6 px-[100px] md:text-lg  text-xs h-[30px] text-rawdawhite bg-rawdapurple w-[200px] md:w-full md:h-full  rounded-3xl baseline shadow-md"
    >
      {" "}
      Modifier mon profile
      {" "}
    </button>
  </div>

</div>


                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
   
    </>







  
        
);
}
export default Profile;
*/

import React, { useState } from "react";
import NavAfter from "../Components/NavAfter";
import mehdi from "../assets/mehdi.jpeg";
import line from "../assets/line.svg";
import line2 from "../assets/line2.svg";
import Footer from "../Components/Footer";
import ModifierProfil from "../Components/ModifierProfil";
import VoirProfil from "../Components/VoirProfil";
function Profile({ photo, nomc, role, email, num, daten, adresse, EI }) {
  const [modifierProfilVisible, setModifierProfilVisible] = useState(false);
  const handleClick = () => {
    setModifierProfilVisible(true);
  };

  return (
    <>
     
      <div className="bg-rawdawhite">
        <NavAfter />
        { modifierProfilVisible ?
        <ModifierProfil handleClick={handleClick}/>
         : <VoirProfil handleClick={handleClick}/>}
        <Footer />
      </div>
    </>
  );
}
export default Profile;
