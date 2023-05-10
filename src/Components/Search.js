import Select from 'react-select'
import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Wilayas from "../data/wilayas.json";
import loupe from "../assets/loupe.svg";
import RsltRechercheCreches from '../Pages/RsltRechercheCreches';
import axios from 'axios';
import {
  
    Bars3Icon,
    XMarkIcon,
    AdjustmentsHorizontalIcon,
  } from "@heroicons/react/24/outline";
  import rawda from "../assets/rawda.svg";

function Search(){
  const [Wilaya, setWilaya] = useState("");
  const [WilayaId, setWilayaId] = useState(0);
  const [commune, setCommune] = useState();
  const handlecommune = (Selectedcommune) => {
    setCommune(Selectedcommune);
  };

 // const navigate = useNavigate();

  const handleWilaya = (SelectedWilaya) => {
    setWilaya(SelectedWilaya);
    const wilayaObject = Wilayas.find(
      (wilaya) => wilaya.name === SelectedWilaya
    );
    setWilayaId(wilayaObject.id);
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
  const handlenomClick = (event) => {
    setNom(event.target.value);
    console.log("nom d'etablissement: ", nom);

    //navigate('/RsltRechercheCreches')
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
      await axios.post("http://localhost:8000/documents", {
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
      });
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
  <div className=" sm:ml-6 sm:block ">
  <div className="nav-search flex justify-between sticky top-18  mx-6 mt-2 sm:mx-0 sm:mt-0 bg-white items-center border border-gray-300 rounded-xl ">
    <div
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
      placeholder="Rechercher..."
      required
      onChange={handlenomChange}
      className="nav-search w-full outline-none bg-transparent px-4 py-2 sm:text-sm text-xs  text-gray-600"
    />
    <a href="#search" onClick={handleClick}>
      <AdjustmentsHorizontalIcon
        className=" md:inline-flex h-10 rounded-xl p-2 cursor-pointer mx-4 text-gray-500 hover:bg-rawdawhite hover:bg-opacity hover:w-[40px] hover:h-[40px]"
        onClick={handleClick}
      />
    </a>
  </div>
</div>

<div className='flex justify-center items-center'>   

{fopen ? (
  <Disclosure
    as="nav"
    id="main-menu-filter"
    className="bg-white border-b border-gray-300 p-5"
  >
    <div className="mx-8 flex items-center justify-center  bg-opacity-5 bg-rawdapurple mb-16 rounded-xl mt-6 ">
      {" "}
      {/* start */}
      <div className="mx-auto sm:px-6  ">
        <div className="relative flex-col mx-2 my-2 w-full h-max justify-center items-center md:mb-10 mb-4 ">
          <div
            className="container flex flex-wrap p-2  md:flex-row 
                 items-center justify-between px-6 mx-auto mt-10 space-y-0 md:space-y-0"
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap justify-center gap-6">
                {" "}
                {/* first flex */}
                {/*   <div >
                       <input
                       type="text"
                       id="Nom de l'etablissement"
                        placeholder="Nom de l'etablissement"
                      required
                     className="rounded-md w-[250px] h-[38px] md:w-[330px] bg-white border-gray-500 opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                     onChange={handlenomChange}
                     />
                  
                     </div> */}
                <div className="  sm:block">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <select
                      name="wilaya"
                      className="w-[210px] h-[38px] rounded p-2 border border-gray-700 border-opacity-30 text-gray-600 bg-white outline-none"
                      onChange={(wilaya) =>
                        handleWilaya(wilaya.target.value)
                      }
                    >
                      <option value="">Wilaya</option>
                      {Wilayas.map((wilaya, i) => {
                        return (
                          <option
                            key={i}
                            className="hover:bg-rawdapurple"
                            value={wilaya.name}
                          >
                            {wilaya.code}-{wilaya.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className=" sm:block">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <select
                      name="commune"
                      className="w-[210px] h-[38px] rounded p-2 border border-gray-700 text-gray-600 border-opacity-30 bg-white outline-none"
                      onChange={(commune) =>
                        handlecommune(commune.target.value)
                      }
                    >
                      <option value="">Commune</option>
                      {Wilayas[WilayaId - 1]?.dairas.map((daira) => {
                        return (
                          <>
                            {daira.communes?.map((commune, i) => {
                              return (
                                <option
                                  key={i}
                                  className="hover:rawdapurple"
                                  value={commune.name}
                                >
                                  {commune.name}
                                </option>
                              );
                            })}
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="  sm:block">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div className="type">
                      <div className="dropdown-container w-[210px]">
                        <Select
                          name="Type d’etablissement"
                          options={Typeta}
                          placeholder="Type d'etabliss"
                          value={typEtab}
                          onChange={handletypEtabChange}
                          isSearchable={true}
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {" "}
                {/* second flex */}
                <div className="  sm:block">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div className="age">
                      <div className="dropdown-container w-[210px]">
                        <Select
                          name="Type d’accueil"
                          options={Typeac}
                          placeholder="Type d'accueil"
                          value={typeAc}
                          onChange={handletypeAcChange}
                          isSearchable={true}
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  sm:block">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div className="jours">
                      <div className="dropdown-container w-[210px]  ">
                        <Select
                          name="Jours d’accueil"
                          options={jourac}
                          placeholder="Jours d'accueil"
                          value={jourAc}
                          onChange={handlejouracChange}
                          isSearchable={true}
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  sm:block">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div className="age">
                      <div className="dropdown-container w-[210px]">
                        <Select
                          name="Age d'accueil"
                          options={ageac}
                          placeholder="Ages d'accueil"
                          value={ageAc}
                          onChange={handleageAcChange}
                          isSearchable={true}
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {" "}
                {/* Third flex */}
                <div className="  sm:block">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div>
                      <input
                        type="number"
                        id="capacite"
                        placeholder="Capacite"
                        min="0"
                        max="100"
                        step="1"
                        value={capacite}
                        onChange={handlecapChange}
                        required
                        className="rounded  h-[38px] w-[210px] bg-white   border-gray-700 border-opacity-30  opacity border py-2 px-2  text-gray-700 placeholder-gray-600 shadow-sm text-base "
                      />
                    </div>
                  </div>
                </div>
                <div className="  sm:block">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div className="pedagogie">
                      <div className="dropdown-container w-[210px]">
                        <Select
                          name="Pedagogie"
                          options={Pedagogie}
                          placeholder="Pedagogie"
                          value={pedag}
                          onChange={handlepedagChange}
                          isSearchable={true}
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" sm:block ">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div className="Langue">
                      <div className="dropdown-container w-[210px]">
                        <Select
                          name="Langue"
                          options={Langue}
                          placeholder="Langue"
                          value={lang}
                          onChange={handlelangChange}
                          isSearchable={true}
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {" "}
                {/* Fourth flex */}
                <div className="  sm:block ">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div className="Transport">
                      <div className="dropdown-container w-[210px]">
                        <Select
                          name="Transport"
                          options={verite}
                          placeholder="Transport"
                          value={trans}
                          onChange={handletransChange}
                          isSearchable={true}
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  sm:block ">
                  <div className="flex space-x-4 m-2 md:m-0">
                    <div className="Alimentation">
                      <div className="dropdown-container w-[210px]">
                        <Select
                          name="Alimentation"
                          options={verite}
                          placeholder="Alimentation"
                          value={alim}
                          onChange={handlealimChange}
                          isMulti={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    id="Prix"
                    placeholder="Prix max /mois (DA)"
                    step="1"
                    min="0"
                    max="100000"
                    required
                    className="rounded h-[38px] w-[210px]  bg-white border-gray-700 border-opacity-30 opacity border py-2 px-2  placeholder-gray-600 shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    onChange={handleprixChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* start */}
    <div className=" flex items-center justify-center">
      <a href="#Filter-search">
        <button
          type="submit"
          className="p-3 px-10 pt-3 mt-[-50px] text-rawdawhite text-xl bg-rawdapurple hover:bg-rawdapurple hover:bg-opacity-70 rounded-full baseline shadow-sm shadow-rawdapurple"
          onClick={handleSubmit}
        >
          <a href="/RsltRechercheCreches"> Rechercher </a>
        </button>
      </a>
    </div>
  </Disclosure>
) : null}
</div>
</>







);
    
    }
   export default Search;