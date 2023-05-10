import Select from "react-select";
import React, { useState } from "react";
import mehdi1 from "../assets/mehdi1.png";
import Footer from "../Components/Footer.js";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Signup from "../Pages/Signup";
import { Login } from "../Pages/Login";
import { Link, redirect } from "react-router-dom";
import Wilayas from "../data/wilayas.json";
import loupe from "../assets/loupe.svg";
import axios from "axios";
import Search from "./Search";
import RsltRechercheCreches from "../Pages/RsltRechercheCreches";
import { useNavigate } from "react-router-dom";
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
  const [Wilaya, setWilaya] = useState("");
  const [WilayaId, setWilayaId] = useState(0);
  const [commune, setCommune] = useState();
  const handlecommune = (Selectedcommune) => {
    setCommune(Selectedcommune);
  };

  const navigate = useNavigate();

  const handleWilaya = (SelectedWilaya) => {
    setWilaya(SelectedWilaya);
    const wilayaObject = Wilayas.find(
      (wilaya) => wilaya.name === SelectedWilaya
    );
    setWilayaId(wilayaObject.id);
  };
  const mehdi = () => {
    return <Footer />;
  };

  const [fopen, setFOpen] = React.useState(false);
  const handleClick = () => {
    if (fopen === true) {
      setFOpen(false);
    } else setFOpen(true);
  };

  const Typeta = [
    { value: "Prive", label: "Prive" },
    { value: "Public", label: "Public" },
  ];

  const Pedagogie = [
    { value: "Montessori", label: "Montessori" },
    { value: "Freinet", label: "Freinet" },
    { value: "Steiner", label: "Steiner" },
    { value: "Institutionnelle", label: "Institutionnelle" },
    { value: "Pikler-Loczy", label: "Pikler-Loczy" },
  ];
  const Typeac = [
    { value: "Regulier", label: "Regulier" },
    { value: "Ocasionnel", label: "Ocasionnel" },
  ];

  const Langue = [
    { value: "Arabe", label: "Arabe" },
    { value: "Francais", label: "Francais" },
    { value: "Anglais", label: "Anglais" },
  ];

  const jourac = [
    { value: "Dimanche", label: "Dimanche" },
    { value: "Lundi", label: "Lundi" },
    { value: "Mardi", label: "Mardi" },
    { value: "Mercredi", label: "Mercredi" },
    { value: "Jeudi", label: "Jeudi" },
    { value: "Vendredi", label: "Vendredi" },
    { value: "Samedi", label: "Samedi" },
  ];

  const ageac = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const verite = [
    { value: "oui", label: "oui" },
    { value: "non", label: "non" },
  ];

  const [typEtab, setTypEtab] = useState();
  const typeEtab = typEtab ? typEtab.value : "";
  const handletypEtabChange = (typEtab) => {
    setTypEtab(typEtab);
  };

  const [jourAc, setJourAc] = useState();
  const joursAccueil = jourAc ? jourAc.value : "";
  const handlejouracChange = (jourAc) => {
    setJourAc(jourAc);
  };

  const [typeAc, setTypeAc] = useState();
  const typeAccueil = typeAc ? typeAc.value : "";
  const handletypeAcChange = (typeAc) => {
    setTypeAc(typeAc);
  };

  const [ageAc, setAgeAc] = useState();
  const ageAccueil = ageAc ? ageAc.value : "";
  const handleageAcChange = (ageAc) => {
    setAgeAc(ageAc);
  };

  const [pedag, setPedag] = useState();
  const pedagogie = pedag ? pedag.value : "";
  const handlepedagChange = (pedag) => {
    setPedag(pedag);
  };

  const [lang, setLang] = useState();
  const langue = lang ? lang.value : "";
  const handlelangChange = (lang) => {
    setLang(lang);
  };

  const [alim, setAlim] = useState();
  const alimentation = alim ? alim.value : "";
  const handlealimChange = (alim) => {
    setAlim(alim);
  };

  const [trans, setTrans] = useState();
  const transport = trans ? trans.value : "";
  const handletransChange = (trans) => {
    setTrans(trans);
  };

  const [prix, setPrix] = useState();
  const handleprixChange = (event) => {
    setPrix(event.target.value);
  };

  const [capacite, setValue] = useState("");
  function handlecapChange(event) {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);

    if (isNaN(numericValue)) {
      setValue("");
    } else {
      setValue(numericValue);
    }
  }
  const [nom, setNom] = useState("");
  const handlenomClick = async (event) => {
    //setNom(event.target.value);
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/documents", {
        nom,
        Wilaya,
        commune,
        typeEtab,
        typeAccueil,
        joursAccueil,
        ageAccueil,
        capacite,
        langue,
        pedagogie,
        alimentation,
        transport,
        prix,
      }) .then ((res) =>{
                navigate("/RsltRechercheCreches" ,{state : {  data :res.data  }});})
          .catch((error)=>{ console.log(error)});
    } catch (e) {
      console.log(" DATE NOT SENT  ");
    }
    console.log("nom d'etablissement: ", nom);

    navigate('/RsltRechercheCreches')
  };
  const handlenomChange = (event) => {
    setNom(event.target.value);
  };

  /* const handlenomclick =(event) =>{
event.preventDefault();
console.log("nom d'etablissement", nomdetablissement)

} */

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/documents", {
        nom,
        Wilaya,
        commune,
        typeEtab,
        typeAccueil,
        joursAccueil,
        ageAccueil,
        capacite,
        langue,
        pedagogie,
        alimentation,
        transport,
        prix,
      }) .then ((res) =>{
                navigate("/RsltRechercheCreches" ,{state : {  data :res.data  }});})
          .catch((error)=>{ console.log(error)});
    } catch (e) {
      console.log(" DATE NOT SENT  ");
    }
    console.log("wilaya:", Wilaya);
    console.log("commune: ", commune);
    console.log("Type detablissement:", typeEtab);
    console.log("type daccueil:", typeAccueil);
    console.log("jour daccueil:", joursAccueil);
    console.log("age daccueil:", ageAccueil);
    console.log("capacite:", capacite);
    console.log("Langue:", langue);
    console.log("Pedagogie:", pedagogie);
    console.log("Alimentation:", alimentation);
    console.log("Transport:", transport);
    console.log("Prix:", prix);
  };

  return (
    <>
      <Disclosure
        as="nav"
        className=" sticky top-0 z-50 bg-white border-b border-gray-300 "
      >
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
                <div className="flex space-x-32 flex-1 items-center justify-center sm:items-stretch ">
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
                  
<div className="hidden sm:block">
<Search/>
</div>
                  

                      
                      {/* <div
                        className="flex ml-2 justify-center items-center bg-rawdapurple rounded-xl h-[30px] w-[60px]"
                        onClick={handlenomClick}
                      >
                        <a href="/RsltRechercheCreches">
                          {" "}
                          <img src={loupe} />{" "}
                        </a>
                      </div>

                      <input
                        id="desktop-search"
                        type="text"
                        placeholder="Rechercher par nom..."
                        required
                        onChange={handlenomChange}
                        className="nav-search w-full outline-none bg-transparent px-4 py-2 text-sm text-gray-600"
                      />
                      <a href="#search" onClick={handleClick}>
                        <AdjustmentsHorizontalIcon
                          className="hidden md:inline-flex h-10 rounded-full p-2 cursor-pointer mx-4 text-gray-500"
                          onClick={handleClick}
                        />
                      </a>
                     */}
                     
                </div>
                <div className="hidden absolute sm:space-x-4 sm:inset-y-0 sm:right-0 sm:flex sm:items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    id="se connecter"
                    type="button"
                    className="rounded-full font-medium text-sm bg-rawdawhite px-4 py-2 text-rawdapurple hover:bg-rawdapurple hover:bg-opacity-50 hover:text-rawdawhite "
                  >
                    <a href="/Login">Se connecter</a>
                  </button>

                  <button
                    id="s'inscrire"
                    type="button"
                    className="rounded-full font-medium text-sm bg-rawdapurple px-4 py-2 text-rawdawhite  hover:bg-rawdapurple hover:bg-opacity-20 hover:text-rawdapurple "
                  >
                    <a href="/Signup">S'inscrire</a>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <button
                  fullWidth
                  type="button"
                  className=" block px-3 py-2 rounded-full text-base font-medium bg-violet-700 text-white "
                >
                  <a href="/Login">Se connecter</a>
                </button>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                <button
                  fullWidth
                  type="button"
                  className=" block px-3 py-2 rounded-full text-base font-medium bg-violet-700 text-white hover:text-violet-700 hover:bg-violet-50"
                >
                  <a href="/Signup">S'inscrire</a>
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
     <div className="mb-[-60px] sm:hidden">
      <Search/>
      </div> 


         
      
    </>
    
  );
}
