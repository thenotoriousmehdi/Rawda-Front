import React, { useState, Component } from 'react';
import logo from '../assets/rawda.svg';
import google from '../assets/google.svg';
//import logo from './logo.svg';

const Signup =(props) => {

    
      const [nom, setNom] = useState('');
      const [prenom, setPrenom] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [typeUtilisateur, setTypeUtilisateur] = useState('');
      const [userType, setUserType] = useState(null);
      const [showPopup, setShowPopup] = useState(false);



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

      const handleUserTypeChange = (type) => {
        setUserType(type);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', nom);
        console.log('Password:', prenom);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Type de lutilisateur:', userType);
      }
      const handleFormSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);
      };

    return(


    <div class="h-screen bg-rawdawhite">

            <div className=" flex items-center justify-center h-12  bg-white">
                 <img className="w-1/12 mb-4 mt-4 " src={logo} alt="logo" />
            </div>

            <section class="flex justify-center mt-2 ">
                   <img class="w-8" src={google} alt="google" />
            </section>
            <p class="mt-2 mb-2 font-body text-center">Ou inscrivez-vous avec votre email</p>


            <div class="flex flex-col items-center justify-center ">

                  <form onSubmit={handleSubmit} class="w-1/3">

                       <div class="flex flex-wrap justify-between mx-auto ">
                            <div className="w-full container mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ">
                            <label class="" >
                                 <input class="w-full p-3 font-body mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="text" name="Nom" placeholder="Nom de famille" value={nom} onChange={handleNomChange} />
                             </label>

                             <label class="" >
                                 <input class="w-full p-3 font-body mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="text" placeholder="Prenom" value={prenom} onChange={handlePrenomChange} />
                             </label>
                             </div>
                             <label class="w-full">
                                 <input class="w-full p-3 mb-4 font-body rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="email" placeholder="Adresse mail" value={email} onChange={handleEmailChange} />
                             </label>

                             <label class="w-full">
                                 <input class="w-full p-3 font-body rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} />
                             </label>

                             <p class="mt-2 font-body mb-2">Vous êtes ?</p>

                             <div class="w-full container mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 " >
                               

                                    <button className={` font-body  py-3 mr-5 font-bold font-poppins text-center text-lg rounded-lg bg-white text-rawdablack border-2 border-rawdapurple focus:outline-none ${ userType === 'parent' ? ' underline' : '' }`} onClick={() => handleUserTypeChange('parent')}>
                                     Un parent  
                                    </button>

                                     <button className ={` py-3 font-body font-bold text-center text-lg rounded-lg bg-white text-rawdablack border-2 border-rawdapurple focus:outline-none ${ userType === 'creche' ? ' underline' : '' }`} onClick={() => handleUserTypeChange('creche')}>
                                      Respo de crèche
                                     </button> 
                              
                             </div>

                              <div class="mx-auto my-auto md:w-6/12 ">
                                      <button class="lg:mb-7 w-full h-12 mt-5 border-2 font-body focus:outline-none bg-rawdapurple hover:bg-violet-900 text-white rounded-xl shadow-2xl opacity-100 shadow-purple-600" type="submit" onClick={handleFormSubmit}> S'inscrire </button>


                                      {showPopup && (
                                         <div className="bg-white p-4 shadow-md rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <p className="font-bold font-body mb-2">Votre inscription a été faite avec succès ! </p>
                                                <button className="bg-rawdapurple font-body text-white font-bold py-2 px-4 rounded"  onClick={()=>props.onFormSwitch('Profil')} >
                                                  Vous voulez voir votre profil
                                                </button>
                                          </div>
                                            )}
                              </div>
                        
                              <div class="flex justify-center justify-content">
                                      <section class=" border-b lg:ml-16 border-gray-500 border-opacity-50 border-solid lg:w-80"></section>
                              </div>

                              <div class="mx-auto my-auto mt-3">
                                      <span className="mr-4 text-xs font-body text-gray-500 "> Vous avez deja un compte ?</span> <buttom onClick={()=>props.onFormSwitch('Login')} className="text-rawdapurple text-xs font-bold cursor-pointer sm:mb-5 font-body">Se connecter</buttom>
                              </div>

                      </div>
               </form>
            </div>


    </div>

        );
    }

  export default Signup;