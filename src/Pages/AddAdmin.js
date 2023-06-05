import React, { useState } from "react";
import logo from "../assets/logo.svg";
import google from "../assets/google1.svg";
import axios from "axios"; 
import decosu from "../assets/decosu.svg";
import decosu1 from "../assets/decosu1.svg";

const AddAdmin = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const handleSubmit = async (event) => {
    /* envoie des infos vers le back */
    const role = "admin";
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/signup", {
        nom,
        prenom,
        email,
        password,
        role,
        
      });
    } catch (e) {
      console.log(" USER NOT SIGNED ");
    }

    console.log("Email:", nom);
    console.log("Password:", prenom);
    console.log("Email:", email);
    console.log("Password:", password);
 
  }; /* fin de l'envoie */
  const handleFormSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div class="h-screen bg-rawdawhite">
      <div className=" flex items-center justify-center sticky top-0 z-50  bg-white border-b border-gray-300">
        <a href="/">
          <img className="w-1/2 ml-12 m-3 " src={logo} alt="logo" />
        </a>
      </div>

      <div className="flex flex-col items-center gap md:gap-y-0 mt-12 ">
                <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdapurple z-10">
                  {" "}
                 Ajout d'un nouvel Admin
                </p>
                <div className="  mb-[0.5px] mt-[-15px] w-[100px] md:w-[430px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div>
              </div>
<div className="flex flex-col mt-12">
      <div class="flex flex-col items-center justify-center ">
        <form onSubmit={handleSubmit} class="w-1/3">
          
          <div className="flex flex-wrap justify-between mx-auto ">
            <div className="w-full container mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ">
              <label class="">
                <input
                  className="w-full p-3 font-body mb-4 rounded-md bg-rawdapurple bg-opacity-[15%] border-neutral-200 focus:outline-none"
                  type="text"
                  name="Nom"
                  placeholder="Nom "
                  value={nom}
                  onChange={handleNomChange}
                />
              </label>

              <label class="">
                <input
                  className="w-full p-3 font-body mb-4 rounded-md bg-rawdapurple bg-opacity-[15%] border-neutral-200 focus:outline-none"
                  type="text"
                  placeholder="Prenom"
                  value={prenom}
                  onChange={handlePrenomChange}
                />
              </label>
            </div>
            <label class="w-full">
              <input
                class="w-full p-3 mb-4 font-body rounded-md  bg-rawdapurple bg-opacity-[15%] border-neutral-200 focus:outline-none"
                type="email"
                placeholder="Adresse mail"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                maxlength="255"
                value={email}
                onChange={handleEmailChange}
              />
            </label>

            <label class="w-full">
              <input
                class="w-full p-3 font-body rounded-md  bg-rawdapurple bg-opacity-[15%] border-neutral-200 focus:outline-none"
                type="password"
                placeholder="Mot de passe"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                minlength="8"
                maxlength="20"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>

            <div class="mx-auto my-auto md:w-6/12 ">
              <button
                class="lg:mb-7 w-full h-12 mt-5  font-body focus:outline-none bg-rawdapurple hover:bg-violet-900 text-white rounded-xl shadow-sm opacity-100 shadow-purple-600"
                type="submit"
                onClick={handleSubmit}
              >
                <a href="/"> Ajouter un admin </a>
              </button>

            </div>

           
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AddAdmin;
