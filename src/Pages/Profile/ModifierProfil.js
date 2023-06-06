import NavAfter from "../../Components/NavAfter";
import mehdi from "../../assets/mehdi.jpeg";
import line from "../../assets/line.svg";
import line2 from "../../assets/line2.svg";
import Footer from "../../Components/Footer";
import axios from "axios";
import iconm from "../../assets/iconmodphoto.svg";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

function ModifierProfil({ nomc, role }) {

  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePicture2, setProfilePicture2] = useState(null);
  const handleIconClick = () => {
  
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (event) => {
      const file = event.target.files[0];
      setProfilePicture(file);
      const reader = new FileReader();

      reader.onload = (event) => {
        const newProfilePicture = event.target.result;
        setProfilePicture2(newProfilePicture);
      };
      // Read the contents of the selected file
      reader.readAsDataURL(file);
    };

    // Click the input element to open the file picker dialog
    input.click();
  };

  const [dateNaissance, setDatetoken] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [adress, setadresse] = useState("");
 

  
  const handleadresseChange = (event) => {
    setadresse(event.target.value);
  };
  const handleButtonClick = () => {
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };
  

  const [phone, setNum] = useState("");
  const handlenumChange = (event) => {
    setNum(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

   
    const formData = new FormData();
    console.log(profilePicture);
    formData.append("phone", phone);
    formData.append("adress", adress);
    formData.append("dateNaissance", dateNaissance.toLocaleDateString());
    formData.append("photo", profilePicture);

    try {
      await axios.patch("http://localhost:8000/modifierProfile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log("Erreur lors de la requête PATCH :", error);
    }
    console.log("Requête PATCH effectuée avec succès !");
  };
  const handleconfirmerbutton = (event) => {
    event.preventDefault();
    handleSubmit(event);
     navigate("/");
   };
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const handlePasswordSubmit = async (e) => {
    const handlePasswordSubmit = async (e) => {
      e.preventDefault();

      if (newPassword === confirmNewPassword) {
        console.log("Current password:", oldPassword);
        console.log("New password:", newPassword);
        setCanSubmit(true);
      } else {
        console.log("New passwords do not match");
        setCanSubmit(false);
      }
    };
    try {
      await axios.patch("http://localhost:8000/modifierPassword", {
        oldPassword: oldPassword,
        newPassword: newPassword,
      });
    } catch (e) {
      console.log(" PASSWORD NOT MODIFIED ");
    }
  };
  return (
    <>
      <div
        id="Modifierprofile"
        className="flex justify-items-center items-center justify-center md:mx-12 mx-6 mt-36 bg-opacity-10 bg-rawdapurple w-[333px]  md:w-[500px] h-full mb-6 rounded-xl "
      >
        <div className="mx-auto  ">
          <div className="relative flex-col mx-2 my-2  justify-center items-center md:mb-10 mb-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center gap">
                <img
                  className="mt-[-40px] md:mt-[-70px] ml-[50px] mr-[50px] h-[70px] w-[70px] md:h-[130px] md:w-[130px] rounded-full z-30 border-2 border-rawdapurple border-opacity-100 "
                  src={profilePicture2}
                  alt=""
                />
              </div>
              <div className="flex ">
                <img
                  onClick={handleIconClick}
                  className="h-[20px] w-[20px] z-50 ml-[195px] mt-[-50px] sm:ml-[235px] hover:bg-rawdablack hover:rounded-full hover:h-[25px] hover:w-[25px]"
                  src={iconm}
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-center text-rawdablack text-xl font-medium font-Poppins ">
                  <h1>{nomc}</h1>
                </div>
                <div className="flex justify-center text-[#475467]  font-light">
                  <h4>{role}</h4>
                </div>
                <div className=" ml-12 sm:ml-6 sm:w-[350px] w-[250px]">
                  <img src={line} />
                </div>
              </div>
              <div className="mt-4 ml-8 md:ml-0 flex justify-items-stretch gap-4">
                <img src={line2} />
                <div className=" mx-2 flex flex-col gap-1">
                  <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                    <h4>Email</h4>
                  </div>
                  <div className=" flex justify-start text-[#475467]  font-light"></div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
                  <img src={line2} />
                  <div className="mt-1 mx-2 flex flex-col gap-1">
                    <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                      <h4>Numéro de téléphone</h4>
                    </div>
                    <div className=" flex justify-start text-[#475467]  font-light">
                      <div>
                        <input
                          onChange={handlenumChange}
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
                  <img src={line2} />
                  <div className="mt-1 mx-2 flex flex-col gap-1">
                    <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                      <h4>Date de naissance</h4>
                    </div>
                    <div className=" flex justify-start text-[#475467]  font-light">
                      <DatePicker
                        id="datepi"
                        required
                        selected={dateNaissance}
                        onChange={(date) => {
                          setDatetoken(date);
                        }}
                        minDate={new Date(1940, 0, 1)} // January 1, 1940
  maxDate={new Date(2005, 11, 31)} // December 31, 2005
                        filterDate={(date) =>
                          date.getDay() !== 5 && date.getDay() !== 6
                        }
                        dateFormat="dd/MM/yyyy"
                        className="rounded w-[250px]  h-[38px] md:w-[330px] z-40  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base   "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
                  <img src={line2} />
                  <div className="mt-1 mx-2 flex flex-col gap-1">
                    <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                      <h4>Adresse</h4>
                    </div>
                    <div className=" flex justify-start text-[#475467]  font-light">
                      <h4>
                        <div>
                          <input
                            type="text"
                            id="Adresse"
                            placeholder="Adresse"
                            maxlength="255"
                            required
                            onChange={handleadresseChange}
                            className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                          />
                        </div>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex ml-8 md:ml-0 justify-items-stretch gap-4 mt-5">
                  <img src={line2} />
                  <div className="mt-1 mx-2 flex flex-col gap-1 ">
                    <div className=" rounded w-[250px]  h-[38px] md:w-[330px]  bg-rawdapurple bg-opacity-50 hover:bg-rawdapurple border-rawdapurple border-opacity-80 border md:pl-16 pl-6 pt-1 mx-4  text-rawdawhite text-lg  shadow-sm  ">
                      <button onClick={handleButtonClick}>
                        Modifier le Mot de passe
                      </button>
                      {showPopup && (
                        <div className="popup">
                          <div className="bg-white p-4 shadow-md rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <form onSubmit={handlePasswordSubmit}>
                              <div className="flex flex-col gap-2">
                                <div className=" flex justify-start text-[#475467]  font-light">
                                  <h4>
                                    <div>
                                      <input
                                        type="password"
                                        id="old password"
                                        placeholder="Mot de passe actuel"
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                                        minlength="8"
                                        maxlength="20"
                                        required
                                        value={oldPassword}
                                        onChange={(e) =>
                                          setOldPassword(e.target.value)
                                        }
                                        className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                                      />
                                    </div>
                                  </h4>
                                </div>
                                <div className=" flex justify-start text-[#475467]  font-light">
                                  <h4>
                                    <div>
                                      <input
                                        type="password"
                                        id="new password"
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                                        minlength="8"
                                        maxlength="20"
                                        placeholder="Nouveau Mot de passe"
                                        required
                                        value={newPassword}
                                        onChange={(e) =>
                                          setNewPassword(e.target.value)
                                        }
                                        className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                                      />
                                    </div>
                                  </h4>
                                </div>
                                <div className=" flex justify-start text-[#475467]  font-light">
                                  <h4>
                                    <div>
                                      <input
                                        type="password"
                                        id="confirm new password"
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                                        minlength="8"
                                        maxlength="20"
                                        placeholder="Confirmer le nouveau Mot de passe"
                                        required
                                        value={confirmNewPassword}
                                        onChange={(e) =>
                                          setConfirmNewPassword(e.target.value)
                                        }
                                        className="rounded w-[250px]  h-[38px] md:w-[330px]  bg-white border-rawdapurple border-opacity-80 border py-2 px-2 mx-4  text-gray-700 placeholder-gray-600  shadow-sm text-base "
                                      />
                                    </div>
                                  </h4>
                                </div>
                              </div>
                              <div className="mt-6 flex flex-wrap justify-center gap-4">
                                <a>
                                  <button
                                    onClick={closePopup}
                                    id="Annuler la  modifictaion"
                                    type="button"
                                    className="rounded font-medium text-lg bg-rawdawhite px-4 py-2 text-rawdapurple hover:bg-rawdapurple hover:bg-opacity-50 hover:text-rawdawhite  "
                                  >
                                    Annuler
                                  </button>
                                </a>
                                <a>
                                  <button
                                    onClick={handlePasswordSubmit}
                                    id="Confirmer la modification"
                                    type="button"
                                    className="rounded font-medium text-lg bg-rawdapurple px-4 py-2 text-rawdawhite  hover:bg-rawdapurple hover:bg-opacity-20 hover:text-rawdapurple "
                                    disabled={!canSubmit}
                                    // disabled={!canSubmit}
                                  >
                                    Confirmer
                                  </button>
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a>
                    <button
                    onClick={closePopup}
                      id="Annuler la  modifictaion"
                      type="button"
                      className="rounded-full font-medium text-lg bg-rawdawhite px-4 py-2 text-rawdapurple hover:bg-rawdapurple hover:bg-opacity-50 hover:text-rawdawhite  "
                    >
                      Annuler
                    </button>
                  </a>
                  <a>
                    <button
                      onClick={handleconfirmerbutton}
                      id="Confirmer la modification"
                      type="button"
                      className="rounded-full font-medium text-lg bg-rawdapurple px-4 py-2 text-rawdawhite  hover:bg-rawdapurple hover:bg-opacity-20 hover:text-rawdapurple "
                    >
                      Confirmer
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ModifierProfil;
