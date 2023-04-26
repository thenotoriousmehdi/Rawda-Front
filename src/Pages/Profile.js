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
