import Select from 'react-select'
import React, { useState } from "react";
import mehdi1 from "../assets/mehdi1.png"
import Footer from "../Components/Footer.js"
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  
  Bars3Icon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import rawda from "../assets/rawda.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [fopen, setFOpen] = React.useState(false);
  const mehdi = () => {
    return (
<Footer/>
    );
  }

  const handleClick = () => {
    if (fopen === true) {
      setFOpen(false);
    } else setFOpen(true);
  };
  const wilaya = [

    "Adrar", "Chlef", "Laghouat",  "Oum El Bouaghi", "Batna", "Béjaïa",  "Biskra",
    "Bechar", "Blida", "Bouira",  "Tamanrasset",   "Tbessa",  "Tlemcen", "Tiaret",
    "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Setif",  "Saeda", "Skikda",  "Sidi Bel Abbes",
    "Annaba", "Guelma",  "Constantine", "Medea", "Mostaganem",  "M'Sila", "Mascara",
    "Ouargla",  "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj",  "Boumerdes",
    "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila",
    "Ain Defla", "Naama",  "Ain Temouchent",  "Ghardaefa", "Relizane", "El M'ghair",  "El Menia",
    "Ouled Djellal", "Bordj Baji Mokhtar", "Béni Abbès",  "Timimoun", "Touggourt",
    "Djanet",  "In Salah",  "In Guezzam",
    
  ];
  const Typeta = [
    { value: "Prive", label: "Prive" },
    { value: "Public", label: "Public" }
  ]
  
  const Pedagogie=[
   { value: "Montessori", label: "Montessori" },
    { value: "Freinet", label: "Freinet" },
    { value: "Steiner", label: "Steiner" },
    { value: "Institutionnelle", label: "Institutionnelle" },
    { value: "Pikler-Loczy", label: "Pikler-Loczy" }
  ]
  const Typeac = [
    { value: "Regulier", label: "Regulier" },
    { value: "Ocasionnel", label: "Ocasionnel" }
  ]
  
  const langue =[
    { value: "Arabe", label: "Arabe" },
    { value: "Francais", label: "Francais" },
    { value: "Anglais", label: "Anglais" }
  ]
  
  
  const jourac = [
    { value: "Dimanche", label: "Dimanche" },
    { value: "Lundi", label: "Lundi" },
    { value: "Mardi", label: "Mardi" },
    { value: "Mercredi", label: "Mercredi" },
    { value: "Jeudi", label: "Jeudi" },
    { value: "Vendredi", label: "Vendredi" },
    { value: "Samedi", label: "Samedi" }
  ];
  
  const ageac = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" }
  ];
  
  const Capacite = [
    { value: "0-30", label: "0-30" },
    { value: "30-60", label: "30-60"},
    { value: "60-100", label: "60-100" },
    { value: "100-200", label: "100-200" },
    { value: "+200", label: "+200" }
    
  ];
  
  const verite=[
    { value: "oui", label: "oui" },
    { value: "non", label: "non"},

  ]
  
  // React state to manage selected options pour les jours d'accueil
  const [selectedOptions, setSelectedOptions] = useState();

  // Function triggered on selection pour les jours d'accueuil
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  // React state to manage selected options pour l'age d'accueil
  const [selectedOptions1, setSelectedOptions1] = useState();

  // Function triggered on selection pour l'age d'accueuil
  function handleSelect(data) {
    setSelectedOptions1(data);
  }
  return (
    <>





    
      <Disclosure as="nav" className=" sticky top-0 z-50 bg-white border-b border-gray-300 ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button*/}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Mobile menu button */}
                <div className="flex space-x-48 flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={rawda}
                        alt="rawdalogo"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src={rawda}
                        alt="rawdalogo"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="nav-search flex space-x-4 bg-white items-center border border-gray-300 rounded-xl ">
                      <input
                        id="desktop-search"
                        type="text"
                        placeholder="Rechercher..."
                        className="nav-search w-full outline-none bg-transparent px-4 py-2 text-sm text-gray-600"
                      />
                      <a href="#search" onClick={handleClick}>
                        <AdjustmentsHorizontalIcon
                          className="hidden md:inline-flex h-10 rounded-full p-2 cursor-pointer mx-4 text-gray-500"
                          onClick={handleClick}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute space-x-4 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a href="/posturad">
                    <button
                      id="pub"
                      type="button"
                      className="rounded-full font-medium text-sm bg-rawdawhite px-4 py-2 text-violet-700 hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800"
                    >
                      Se Connecter
                    </button>
                  </a>
                  <a href="/posturad">
                    <button
                      id="pub"
                      type="button"
                      className="rounded-full font-medium text-sm bg-rawdapurple px-4 py-2 text-rawdawhite hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800"
                    >
                      S'inscrire
                    </button>
                  </a>
                 
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
              
                <a href="/posturad">
                  <button
                    fullWidth
                    type="button"
                    className=" block px-3 py-2 rounded-full text-base font-medium bg-violet-700 text-white hover:text-violet-700 hover:bg-violet-50"
                  >
                    Se Connecter
                  </button>
                </a>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
              
                <a href="/posturad">
                  <button
                    fullWidth
                    type="button"
                    className=" block px-3 py-2 rounded-full text-base font-medium bg-violet-700 text-white hover:text-violet-700 hover:bg-violet-50"
                  >
                    S'inscrire
                  </button>
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      
      {fopen ? (
        <Disclosure
          as="nav"
          id="main-menu-filter"
          className="bg-white border-b border-gray-300 p-5"
        >
          


          <div className="mx-8  bg-opacity-5 bg-rawdapurple mb-16 rounded-xl "> {/* start */}
    <div className="mx-auto  sm:px-6  ">
      <div className="relative flex-col mx-2 my-2 w-full h-max justify-center items-center md:mb-10 mb-4"> 
        <div className="container flex flex-wrap p-2  md:flex-row 
                       items-center justify-between px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col gap-8">


          


<div className="flex flex-wrap justify-center"> {/* first flex */}



                           <div >
                             <input
                             type="text"
                             id="Nom de l'etablissement"
                              placeholder="Nom de l'etablissement"
                            required
                           className="rounded-md w-[250px] h-[38px] md:w-[330px] bg-white border-gray-500 opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>



                           <div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4 m-2 md:m-0">

    <div className="type">
      <div className="dropdown-container w-[300px]">
        <Select
        name="Type d’etablissement"
          options={Typeta}
          placeholder="Type d'etablissement"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti={false}
        />
      </div>
    </div>
    </div>
    </div>



</div>



<div className="flex flex-wrap justify-center"> {/* second flex */}


<div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="age">
      <div className="dropdown-container w-[210px]">
        <Select
        name="Type d’accueil"
          options={Typeac}
          placeholder="Type d'accueil"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti={false}
        />
      </div>
    </div>
    </div>
    </div>



                  <div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="jours">
      <div className="dropdown-container w-[210px]  ">
        <Select
        name="Jours d’accueil"

          options={jourac}
          placeholder="Jours d'accueil"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
    </div>
    </div>
  


    <div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="age">
      <div className="dropdown-container w-[210px]">
        <Select
        name="Age d'accueil"
          options={ageac}
          placeholder="Ages d'accueil"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti={false}
        />
      </div>
    </div>
    </div>
    </div>




</div>

<div className="flex flex-wrap justify-center"> {/* Third flex */}


<div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="Capacite">
      <div className="dropdown-container w-[210px]">
        <Select
        name="Capacite"
          options={Capacite}
          placeholder="Capacite d'accueil"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti={false}
        />
      </div>
    </div>
    </div>
    </div>

<div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="pedagogie">
      <div className="dropdown-container w-[210px]">
        <Select
        name="Pedagogie"
          options={Pedagogie}
          placeholder="Pedagogie"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti={false}
        />
      </div>
    </div>
    </div>
    </div>


    <div className=" sm:ml-6 sm:block ">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="Langue">
      <div className="dropdown-container w-[210px]">
        <Select
        name="Langue"
          options={langue}
          placeholder="Langue"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti={false}
        />
      </div>
    </div>
    </div>
    </div>



</div>


<div className="flex flex-wrap justify-center"> {/* Fourth flex */}


<div className=" sm:ml-6 sm:block ">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="Transport">
      <div className="dropdown-container w-[210px]">
        <Select
        name="Transport"
          options={verite}
          placeholder="Transport"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti={false}
        />
      </div>
    </div>
    </div>
    </div>

    <div className=" sm:ml-6 sm:block ">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="Alimentation">
      <div className="dropdown-container w-[210px]">
        <Select
        name="Alimentation"
          options={verite}
          placeholder="Alimentation"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti={false}
        />
      </div>
    </div>
    </div>
    </div>


<div >
                             <input
                             type="int"
                             id="Prix"
                              placeholder="Prix/mois (DA)"
                            required
                           className="rounded-md w-[250px] h-[38px] md:w-[210px] bg-white border-gray-500 opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>




</div>















          </div>
        </div>
      </div>
    </div>
</div> {/* start */}
























            
              
              <div className="p-5">
                <a href="#Filter-search">
                  <button
                    type="submit"
                    class="py-2 px-4  bg-violet-700 hover:bg-violet-900 focus:ring-violet-700 focus:ring-offset-violet-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                  Rechercher
                  </button>
                </a>
              </div>
           
          
        </Disclosure>
      ) : null}
    </>
    
  );
}
