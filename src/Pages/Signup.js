import React, { useState, Component } from 'react';
import logo from './assets/logo.svg';
import google from './assets/google.svg';
//import logo from './logo.svg';

const Signup =(props) => {

    
      const [nom, setNom] = useState('');
      const [prenom, setPrenom] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');


      const handleNomChange = (event) => {
        setNom(event.target.value);
      }

      const handlePrenomChange = (event) => {
        setPrenom(event.target.value);
      }

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', nom);
        console.log('Password:', prenom);
        console.log('Email:', email);
        console.log('Password:', password);
      }


    return(


    <div class="h-screen bg-purple-50">


            <div class="flex items-center justify-center h-10 bg-white">
                   <img class="w-1/12" src={logo} alt="logo" />
            </div>

            <section class="flex justify-center mt-2 ">
                   <img class="w-8" src={google} alt="google" />
            </section>

            <footer class="fixed bottom-0 w-full text-center">
                     <p class="mb-4 text-sm text-purple-400">Copyright © 2023 Rawda.com.Tous droits réservés</p>
            </footer>

            <p class="mt-2 mb-2 text-center">Ou inscrivez-vous avec votre email</p>


            <div class="flex flex-col items-center justify-center ">

                  <form onSubmit={handleSubmit} class="w-1/3">

                       <div class="flex flex-wrap justify-between mx-auto ">

                            <label class="w-5/12" >
                                 <input class="w-full p-3 mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="text" name="Nom" placeholder="Nom de famille" value={nom} onChange={handleNomChange} />
                             </label>

                             <label class="w-6/12" >
                                 <input class="w-full p-3 mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="text" placeholder="Prenom" value={prenom} onChange={handlePrenomChange} />
                             </label>

                             <label class="w-full">
                                 <input class="w-full p-3 mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="email" placeholder="Adresse mail" value={email} onChange={handleEmailChange} />
                             </label>

                             <label class="w-full">
                                 <input class="w-full p-3 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} />
                             </label>

                             <p class="mt-2 mb-2">Vous êtes ?</p>

                             <div class="w-full justify-between" >
                                    <button class="w-4/12  py-3 mr-5 font-bold text-center text-lg rounded-lg bg-white text-black border-2 border-purple-700 focus:outline-none">
                                      Un parent  
                                    </button>

                                     <button class="w-7/12 py-3 font-bold text-center text-lg rounded-lg bg-white text-black border-2 border-purple-700 focus:outline-none">
                                      Respo de crèche
                                     </button> 
                             </div>

                              <div class="mx-auto my-auto w-6/12 ">
                                      <button class="mb-7 w-full h-12 mt-5 border-2 focus:outline-none bg-violet-800 hover:bg-violet-900 text-white rounded-xl shadow-2xl opacity-100 shadow-purple-600" type="submit"> S'inscrire </button>
                              </div>
                        
                              <div class="mx-auto my-auto">
                                      <section class=" border-b border-gray-500 border-opacity-50 border-solid w-80"></section>
                              </div>

                              <div class="mx-auto my-auto mt-3">
                                      <span className="mr-4 text-xs text-gray-500 "> Vous avez deja un compte ?</span> <buttom onClick={()=>props.onFormSwitch('Login')} className="text-violet-700 text-xs font-bold cursor-pointer">Se connecter</buttom>
                              </div>
                      </div>
               </form>
            </div>


    </div>

        );
    }

  export default Signup;