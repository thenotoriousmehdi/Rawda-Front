import React, { useState, Component } from 'react';
import logo from '../assets/logo.png';
import google from '../assets/google.svg';
 

   
  


function Login() {
  
  
    return(
    <div className="h-[100vh] bg-purple-50">
       <div className="flex items-center justify-center h-16 bg-white">
        <img className="w-1/12" src={logo} alt="logo" />
       </div>
      <section className="flex justify-center mt-2 ">
        <img className="w-10" src={google} alt="google" />
      </section>
      <footer className="fixed bottom-0 w-full text-center">
        <p className="mb-4 text-sm text-purple-400">Copyright © 2023 Rawda.com.
          Tous droits réservés</p>
      </footer>
      <p className="mt-4 mb-4 text-center">Ou inscrivez-vous avec votre email</p>
      <div className="flex flex-col items-center justify-center ">
        <form /* onSubmit={this.handleSubmit} */ class="w-1/3">
          <div className="flex flex-wrap justify-between mx-auto ">
            <label className="w-5/12" >
              <input clasName="w-full p-3 mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="text" name="Nom" placeholder="Nom de famille" /* value={this.state.nom} onChange={this.handleNomChange} */ />
            </label>
            <label className="w-6/12" >
              <input className="w-full p-3 mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="text" placeholder="Prenom" /* value={this.state.prenom} onChange={this.handlePrenomChange} */ />
            </label>
            <label className="w-full">
              <input className="w-full p-3 mb-4 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="email" placeholder="Adresse mail" /* value={this.state.email} onChange={this.handleEmailChange} */ />
            </label>
            <label className="w-full">
              <input className="w-full p-3 rounded-md bg-neutral-200 border-neutral-200 focus:outline-none" type="password" placeholder="Mot de passe" /* value={this.state.password} onChange={this.handlePasswordChange} */ />
            </label>
            <p className="mt-2 mb-2">Vous êtes ?</p>
            <div className="w-full justify-between " >
            <button className="w-6/12  py-3 mr-5 font-bold text-center text-lg rounded-lg bg-white text-black border-2 border-purple-700 focus:outline-none">
              Un parent
            </button>
            <button className="w-5/12  py-3 font-bold text-center text-lg rounded-lg bg-white text-black border-2 border-purple-700 focus:outline-none">
              Respo de crèche
              </button> 
              </div>
        <div className="mx-auto my-auto w-6/12 ">
          <button className="mb-7 w-full h-12 mt-5 border-2 focus:outline-none bg-violet-800 hover:bg-violet-900 text-white rounded-xl shadow-2xl opacity-100 shadow-purple-600" type="submit"> S'inscrire </button>
        </div>
        <div className="mx-auto my-auto">
          <section className=" border-b border-gray-500 border-opacity-50 border-solid w-80"></section>
        </div>
        <div className="mx-auto my-auto mt-3">
                <span className="mr-4 text-xs text-gray-500 "> Vous avez deja un compte ?</span> <span className="text-violet-700 text-xs font-bold">Se connecter</span>
            </div>
          </div>
          </form>
          </div>
    </div>
        );
    
  }

  export default Login;