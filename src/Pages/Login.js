import React, { useState, Component } from "react";
import axios from "axios";
import image1 from "../assets/iluss2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import google from "../assets/google1.svg";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";

const Login = (Props) => {
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const history = useNavigate();
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  /* const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 */
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await axios
        .post("http://localhost:8000/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          const { key , role , token }= res.data;
          //if ((res.data = "User Existed")) res.status(200);
          localStorage.setItem('token',token )  
          localStorage.setItem('key',key )  
          localStorage.setItem('role',role)  
          navigate("/")
        });
    } catch (e) {
      console.log("USER NOT LOGGED");
    }
    console.log(localStorage.getItem('key')); 
    console.log("Email:", email);
    console.log("Password:", password);
  
  };

  return (
    <div className="min-h-screen bg-rawdawhite">
      <div className=" flex items-center justify-center sticky top-0 z-50  bg-white border-b border-gray-300">
        <a href="/">
          <img className="w-1/2 ml-10 m-3 " src={logo} alt="logo" />
        </a>
      </div>

      <div className="flex flex-wrap mt-3 sm:gap-24 justify-center ">
        {" "}
        {/* big flex */}
        <div className="flex mt-10 gap-x-0">
          <div className="ml-6 sm:ml-none flex flex-col gap-y-6 ">
            <div className="flex flex-col ">
              <div>
                <h1 className="sm:text-4xl text-3xl font-body font-bold mt-6 text-rawdapurple">
                  Bienvenue dans notre
                </h1>
              </div>
              <div>
                <h1 className="sm:text-4xl text-2xl font-body font-bold text-rawdapurple">
                  communauté
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <p className="sm:text-xl text-md font-body text-gray-500 ">
                  Une nouvelle façon de
                </p>
              </div>
              <div>
                <p className="sm:text-xl text-md font-body text-gray-500 ">
                  prendre soin de votre
                </p>
              </div>
              <div>
                <p className="sm:text-xl text-md font-body text-gray-500 ">
                  famille commence ici
                </p>
              </div>
            </div>
          </div>

          <img
            className=" sm:w-[300px] sm:h-[300px] ml-[-220px] mt-[35px] w-[250px] h-[250px]"
            src={image1}
            alt="Image 1"
          />
        </div>
        <div className="flex flex-col">
          <section class="flex justify-center mt-3 mb-4 ">
            <img class="w-8" src={google} alt="google" />
          </section>

          <div className="mx-auto my-auto">
            <section className=" border-b mb-2  border-gray-500 border-opacity-50 border-solid w-[200px] sm:w-[245px]"></section>
          </div>

          <p className=" mb-4 text-xs sm:text-sm text-rawdablack text-center">
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

            <div className="flex p-3 w-full rounded-md justify-between bg-rawdapurple  bg-opacity-[15%] border-neutral-200  ">
              <input
                className="bg-transparent border-transparent"
                type={passwordVisible ? "text" : "password"}
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
                <span
                  className="password-toggle-icon "
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                  />
                </span>
              </div>
            </div>

            <div className="flex justify-end items-end my-auto text-xs text-rawdapurple mx-auto mt-3  ">

            <a href="/MotDePasseOublie">Mot de passe oublié ?</a>
</div>


            <div className="flex justify-center items-center my-auto mx-auto">
              <button
                class="mb-7 mt-6 w-full h-12  focus:outline-none bg-rawdapurple hover:bg-violet-900 text-white rounded-xl shadow-sm opacity-100 shadow-purple-600 hover:scale-105 duration-200"
                type="submit"
                onClick={handleSubmit}
              >
                {" "}
               Se connecter 
              </button>
            </div>

            <div className="mx-auto my-auto">
              <section className=" border-b border-gray-500 border-opacity-50 border-solid w-[245px]"></section>
            </div>

            <div className="flex justify-center items-center my-auto mx-auto mt-3 mb-4 sm:mb-none ">
              <span className="mr-4 text-xs text-gray-500 ">
                {" "}
                Vous n'avez pas de compte ?
              </span>{" "}
              <buttom
                onClick={() => Props.onFormSwitch("/Singup")}
                className="text-violet-700 text-xs font-bold cursor-pointer"
              >
                <a href="/Signup"> S'inscrire </a>
              </buttom>
            </div>
          </form>



        </div>
      </div>

      {/* <footer className="fixed bottom-0 w-full text-center">
        <p className="mb-4 text-xs text-rawdapurple">
          Copyright © 2023 Rawda.com.Tous droits réservés
        </p>
      </footer> */}
    </div>
  );
};
export default Login;