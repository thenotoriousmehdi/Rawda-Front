import React, { useState, Component } from 'react';
import axios from 'axios'; 
import { useNavigate , Link } from 'react-router-dom';
import image1 from '../assets/iluss2.png';

import logo from '../assets/logo.svg';


const Login =(Props) => {
  
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

     
     
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }

      const handleSubmit = async (event) => { 
        event.preventDefault();

        try {
               await axios.post("http://localhost:8000/login" , {
                        email,password
                })
                .then( res=>{
                        if (res.data= "User Existed") res.status(200);
                          
                })
        

       }
        catch(e){ console.log("USER NOT LOGGED")};
        console.log('Email:', email);
        console.log('Password:', password);
      } 

    return(
        <div class="min-h-screen bg-rawdawhite">

                     <div class=" flex items-center justify-center sticky top-0 z-50  bg-white border-b border-gray-300">
                          <img class="w-1/12 m-4 " src={logo} alt="logo" />
                     </div>
 <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="ml-5">
          <div><h1 className="text-4xl font-body font-bold mt-6 text-rawdapurple">Bienvenue dans notre</h1></div>
          <div><h1 className="text-4xl font-body font-bold text-rawdapurple">communauté</h1></div>
          <div className="container mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-1">
          <p className="text-lg font-body text-gray-500 mb-8">Une nouvelle façon de prendre soin de votre famille commence ici</p>
          <img className="w-full sm:w-[350px]" src={image1} alt="Image 1" />
          </div>
</div>
        </div>

                     <footer class="fixed bottom-0 w-full text-center">
                          <p class="mb-4 text-sm text-purple-400">Copyright © 2023 Rawda.com.Tous droits réservés</p>
                     </footer>

                            <div class="relative ml-60 mt-5 w-3/12">

                                    <div class=" flex justify-center items-center my-auto mx-auto ">
                                            <button class="mb-4 mt-5 w-8/12 h-8 text-xs focus:outline-none bg-violet-800 hover:bg-violet-900 text-white rounded-xl opacity-100 shadow-purple-600" >  Se connecter avec google </button>
                                    </div>

                                    <p class=" mb-4 text-center">Ou inscrivez-vous avec votre email</p>

                                    <form onSubmit={handleSubmit} >
                            
                                        <label>
                                                <input class=" p-3 w-full mb-4 rounded-md bg-rawdapurple bg-opacity-[15%] border-neutral-200 focus:outline-none" type="email" placeholder="Entrez votre adresse mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" maxlength="255" value={email} onChange={handleEmailChange} />
                                        </label>

                                        <label>
                                            <input class=" p-3 w-full rounded-md bg-rawdapurple bg-opacity-[15%] border-neutral-200 focus:outline-none" type="password" placeholder="Mot de passe" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" minlength="8" maxlength="20" value={password} onChange={handlePasswordChange} />
                                        </label>

                                        <div class="flex justify-center items-center my-auto mx-auto">
                                                <button class="mb-7 mt-11 w-full h-12  focus:outline-none bg-violet-800 hover:bg-violet-900 text-white rounded-xl shadow-sm opacity-100 shadow-purple-600" type="submit"> Se connecter </button>
                                        </div>

                                        <div class="mx-auto my-auto">
                                                <section class=" border-b border-gray-500 border-opacity-50 border-solid w-[250px]"></section>
                                        </div>

                                        <div class="flex justify-center items-center my-auto mx-auto mt-3">
                                                <span className="mr-4 text-xs text-gray-500 "> Vous n'avez pas de compte ?</span> <buttom onClick={()=>Props.onFormSwitch('/Singup')} className="text-violet-700 text-xs font-bold cursor-pointer">S'inscrire</buttom>
                                        </div>
                                    </form>
                            </div>
                   </div>
        
    );
    
}
 export default Login;
 


{/* 
      import React, { useState } from 'react';
import image1 from '../assets/iluss2.png';
import logo from '../assets/rawda.svg';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="min-h-screen bg-rawdawhite">
      <div className="block h-12  bg-white">
        <img className="w-1/12  mt-4 ml-11" src={logo} alt="logo" />
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="ml-5">
          <div><h1 className="text-4xl font-body font-bold mt-6 text-rawdapurple">Bienvenue dans notre</h1></div>
          <div><h1 className="text-4xl font-body font-bold text-rawdapurple">communauté</h1></div>
          <div className="container mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-1">
          <p className="text-lg font-body text-gray-500 mb-8">Une nouvelle façon de prendre soin de votre famille commence ici</p>
          <img className="w-full sm:w-[350px]" src={image1} alt="Image 1" />
          </div>

        </div>

        <div className="px-8">
          <div className="flex justify-center my-8">
            <button className="px-8 py-3 bg-violet-800 hover:bg-violet-900 text-white font-body rounded-xl opacity-100 shadow-purple-600 focus:outline-none">
              Se connecter avec Google
            </button>
          </div>

          <p className="text-center font-body mb-8">Ou inscrivez-vous avec votre email</p>

          <form onSubmit={handleSubmit}>
            <label className="flex justify-center mb-4">
              <input
                className="p-3 font-body w-7/12  rounded-md bg-neutral-200 border-neutral-200 focus:outline-none"
                type="email"
                placeholder="Entrez votre adresse mail"
                value={email}
                onChange={handleEmailChange}
              />
            </label>

            <label className="flex justify-center mb-8">
              <input
                className="p-3 w-7/12 font-body rounded-md bg-neutral-200 border-neutral-200 focus:outline-none"
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>

            <div className="flex justify-center my-8">
              <button
                className="px-8 py-3 font-body bg-violet-800 hover:bg-violet-900 text-white rounded-xl shadow-md opacity-100 shadow-purple-600 focus:outline-none"
                type="submit"
              >
                Se connecter
              </button>
            </div>
          </form>
         
          <div class="flex justify-center">
              <section class=" border-b border-gray-500 border-opacity-50 border-solid w-80"></section>
            </div>
         
          <div className="flex justify-center items-center my-8">
            <span className="text-gray-500 font-body text-sm mr-2">Vous n'avez pas de compte ?</span>
            <button
              className="text-violet-700 font-body text-sm font-bold cursor-pointer"
              onClick={() => props.onFormSwitch('Signup')}
            >
              S'inscrire
            </button>
          </div>
        </div>
        </div>
        </div>
        
    );
    
}
      export default Login;
 */}