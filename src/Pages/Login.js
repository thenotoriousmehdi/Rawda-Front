import React, { useState, Component } from 'react';
import axios from 'axios'; /* on rajouté had l'impport */
import { useNavigate , Link } from 'react-router-dom';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import logo from '../assets/logo.svg';


const Login =(Props) => {
  
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const history=useNavigate();
     
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }

      const handleSubmit = async (event) => { /* envoie des infos vers le bakc */
        event.preventDefault();

        try {
               await axios.post("http://localhost:8000/login" , {
                        email,password
                })
                .then( res=>{
                        if (res.data= "User Existed")
                        { history("/", {state:{id:email}})}
                })
        

       }
        catch(e){ console.log("USER NOT LOGGED")};
        console.log('Email:', email);
        console.log('Password:', password);
      } /* fin de l'envoie */

    return(
        <div class="min-h-screen bg-purple-50">

                     <div class=" h-10 bg-white">
                          <img class="w-1/12 mt-4 ml-11" src={logo} alt="logo" />
                     </div>

                     <footer class="fixed bottom-0 w-full text-center">
                          <p class="mb-4 text-sm text-purple-400">Copyright © 2023 Rawda.com.Tous droits réservés</p>
                     </footer>

                    <div class='flex flex-wrap'>
                
                          <div className=" w-5/12 mt-16 ml-11 relative ">
                                <img src={image1} alt="Image 1" className="w-full" />
                                <div className="ml-20 absolute top-0 left-0 w-full">
                                        <img src={image2} alt="Image 2" className="w-full" />
                                </div>

                                <div className=" ml-11 absolute top-0 left-0 w-full">
                                        <img src={image3} alt="Image 3" className=" w-10/12 " />
                                </div>
                        
                          </div>


                            <div class="relative ml-60 mt-5 w-3/12">

                                    <div class=" flex justify-center items-center my-auto mx-auto ">
                                            <button class="mb-4 mt-5 border-2 w-8/12 h-12 focus:outline-none bg-violet-800 hover:bg-violet-900 text-white rounded-xl opacity-100 shadow-purple-600" >  Se connecter avec google </button>
                                    </div>

                                    <p class=" mb-4 text-center">Ou inscrivez-vous avec votre email</p>

                                    <form onSubmit={handleSubmit} >
                            
                                        <label>
                                                <input class=" p-3 w-full mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="email" placeholder="Entrez votre adresse mail" value={email} onChange={handleEmailChange} />
                                        </label>

                                        <label>
                                            <input class=" p-3 w-full rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} />
                                        </label>

                                        <div class="flex justify-center items-center my-auto mx-auto">
                                                <button class="mb-7 mt-11 w-full h-12 border-2 focus:outline-none bg-violet-800 hover:bg-violet-900 text-white rounded-xl shadow-2xl opacity-100 shadow-purple-600" type="submit"> Se connecter </button>
                                        </div>

                                        <div class="mx-auto my-auto">
                                                <section class=" border-b border-gray-500 border-opacity-50 border-solid w-80"></section>
                                        </div>

                                        <div class="flex justify-center items-center my-auto mx-auto mt-3">
                                                <span className="mr-4 text-xs text-gray-500 "> Vous n'avez pas de compte ?</span> <buttom onClick={()=>Props.onFormSwitch('/Singup')} className="text-violet-700 text-xs font-bold cursor-pointer">S'inscrire</buttom>
                                        </div>
                                    </form>
                            </div>
                   </div>
        </div>
    );
    
}
      export default Login;
