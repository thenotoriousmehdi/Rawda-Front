import React, { useState, Component } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import image1 from "../assets/iluss2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import logo from "../assets/logo.svg";

const Login = (Props) => {
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  /* const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 */

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/login", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "User Existed")) res.status(200);
        });
    } catch (e) {
      console.log("USER NOT LOGGED");
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-rawdawhite">
      <div className=" flex items-center justify-center sticky top-0 z-50  bg-white border-b border-gray-300">
    <a href="/"> 
        <img className="w-1/2 ml-10 m-3 " 
        
        src={logo} alt="logo"
        
        />
        
        </a>
      </div>

      <div className="flex flex-wrap mt-8 sm:gap-24 justify-center ">
        {" "}
        {/* big flex */}


        <div className="flex mt-10 gap-x-0">



          <div className="flex flex-col gap-y-6 ">
            <div className="flex flex-col ">
              <div>
                <h1 className="text-4xl font-body font-bold mt-6 text-rawdapurple">
                  Bienvenue dans notre
                </h1>
              </div>
              <div>
                <h1 className="text-4xl font-body font-bold text-rawdapurple">
                  communauté
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <p className="text-xl font-body text-gray-500 ">
                  Une nouvelle façon de
                </p>
              </div>
              <div>
                <p className="text-xl font-body text-gray-500 ">
                  prendre soin de votre
                </p>
              </div>
              <div>
                <p className="text-xl font-body text-gray-500 ">
                  famille commence ici
                </p>
              </div>
            </div>
          </div>


          <img className="w-full sm:w-[300px] sm:h-[300px] ml-[-235px] mt-[25px]" src={image1} alt="Image 1" />


        </div>
        
        <div className="relative ml  w-3/12">
          <div className=" flex justify-center items-center my-auto mx-auto ">
            <button className="mb-4 p mt-5 w-8/12 h-8 text-xs focus:outline-none bg-rawdapurple hover:bg-violet-900 text-white rounded-xl opacity-100 shadow-purple-600">
              {" "}
              Se connecter avec google{" "}
            </button>



            
          </div>

          <div className="mx-auto my-auto">
              <section className=" border-b mb-2  border-gray-500 border-opacity-50 border-solid w-[245px]"></section>
            </div>



          <p className=" mb-4 text-sm text-rawdablack text-center">
            Ou inscrivez-vous avec votre email
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                class=" p-3 w-full mb-4 rounded-md font-light bg-rawdapurple bg-opacity-[15%] border-neutral-200 focus:outline-none"
                type="email"
                placeholder="Adresse mail"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                maxlength="255"
                value={email}
                onChange={handleEmailChange}
              />
            </label>

           {/*  <label>
              <input
                className=" p-3 w-full rounded-md font-light bg-rawdapurple bg-opacity-[15%] border-neutral-200 focus:outline-none"
                type="password"
                placeholder="Mot de passe"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                minlength="8"
                maxlength="20"
                value={password}
                onChange={handlePasswordChange}
              />
            </label> */}



      <div className="flex p-3 w-full rounded-md justify-between bg-rawdapurple  bg-opacity-[15%] border-neutral-200  ">

        <input
       className="bg-transparent border-transparent"
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          name="password"
          value={password}
          minlength="8"
          maxlength="20"
          onChange={handlePasswordChange}
          placeholder="Mot de passe"
        />

      <div className="ml-[-25px] z-10"> 
        <span className="password-toggle-icon " onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
        </span>
        </div>

      </div>


            <div className="flex justify-center items-center my-auto mx-auto">
              <button
                class="mb-7 mt-11 w-full h-12  focus:outline-none bg-rawdapurple hover:bg-violet-900 text-white rounded-xl shadow-sm opacity-100 shadow-purple-600"
                type="submit"
              >
                {" "}
                Se connecter{" "}
              </button>
            </div>

            <div className="mx-auto my-auto">
              <section className=" border-b border-gray-500 border-opacity-50 border-solid w-[245px]"></section>
            </div>

            <div className="flex justify-center items-center my-auto mx-auto mt-3">
              <span className="mr-4 text-xs text-gray-500 ">
                {" "}
                Vous n'avez pas de compte ?
              </span>{" "}
              <buttom
                onClick={() => Props.onFormSwitch("/Singup")}
                className="text-violet-700 text-xs font-bold cursor-pointer"
              >
                S'inscrire
              </buttom>
            </div>
          </form>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full text-center">
        <p className="mb-4 text-xs text-rawdapurple">
          Copyright © 2023 Rawda.com.Tous droits réservés
        </p>
      </footer>
    </div>
  );
};
export default Login;

