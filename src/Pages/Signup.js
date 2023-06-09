import React, { useState } from "react";
import logo from "../assets/logo.svg";
import google from "../assets/google1.svg";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(null);
  const [role, setRole] = useState("");

  const handleParentClick = (event) => {
    event.preventDefault();
    setRole("parent");
  };

  const handleProprioClick = (event) => {
    event.preventDefault();
    setRole("proprio");
  };

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

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    /* envoie des infos vers le back */
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/signup", {
        nom,
        prenom,
        email,
        password,
        role,
      }) .then((res) => {
        console.log(res.data);
        const { key , role , token }= res.data;
        //if ((res.data = "User Existed")) res.status(200);
        localStorage.setItem('token',token )  
        localStorage.setItem('key',key )  
        localStorage.setItem('role',role)  
        navigate("/")
      });
    } catch (e) {
      alert(" USER NOT SIGNED ");
      console.error(e);
    }

    console.log("Email:", nom);
    console.log("Password:", prenom);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
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
      <div className="flex flex-col">
        <section class="flex justify-center items-center mt-4 ">
          <img class="w-8" src={google} alt="google" />
        </section>
        <p class="mt-2 mb-2 sm:text-md text-xs font-body text-center">
          Ou inscrivez-vous avec votre email
        </p>

        <div class="flex flex-col items-center justify-center ">
          <form onSubmit={handleSubmit} class="md:w-1/3 w-[220px]">
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

              <p class="mt-2 font-body mb-2">Vous êtes ?</p>

              <div class="w-full container mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 ">
                <button
                  onClick={handleParentClick}
                  className=" py-3 font-body font-bold text-center text-lg rounded-lg bg-white text-rawdablack border-2 hover:text-rawdawhite hover:bg-rawdapurple border-rawdapurple focus:outline-none "
                >
                  Un parent
                </button>

                <button
                  onClick={handleProprioClick}
                  className=" py-3 font-body font-bold text-center text-lg rounded-lg bg-white text-rawdablack border-2 hover:text-rawdawhite hover:bg-rawdapurple border-rawdapurple focus:outline-none"
                >
                  Un Proprio
                </button>
              </div>

              <div class="mx-auto my-auto w-1/2 ">
                <button
                  class="lg:mb-7 mb-10 w-full h-12 mt-5  font-body focus:outline-none bg-rawdapurple hover:bg-violet-900 text-white rounded-xl shadow-sm opacity-100 shadow-purple-600 hover:scale-105 duration-200"
                  type="submit"
                  onClick={handleSubmit}
                >
                  S'inscrire
                </button>
              </div>

              {/* <div className="mx-auto my-auto">
                <section className=" border-b border-gray-500 border-opacity-50 mt-4 mb border-solid w-[100px] sm:w-[250px]"></section>
              </div> */}

              <div class="mx-auto my-auto ">
                <span className="mr-12 text-xs  text-gray-500 ">
                  {" "}
                  Vous avez deja un compte ?
                </span>{" "}
                <buttom
                  onClick={() => props.onFormSwitch("Login")}
                  className="text-rawdapurple text-xs font-semibold cursor-pointer sm:mb-5 font-body"
                >
                  <a href="/Login">Se connecter </a>
                </buttom>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
