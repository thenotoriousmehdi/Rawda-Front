import Select from "react-select";
import Footer from "../Components/Footer";
import NavAfter from "../Components/NavAfter";
import React, { useState } from "react";
import Wilayas from "../data/wilayas.json";
import galery from "../assets/galery.svg";
import exit from "../assets/exit1.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AddCreche() {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleRedirect = () => {
    closePopup();
    navigate("/");
  };
  const [Wilaya, setWilaya] = useState("");
  const [WilayaId, setWilayaId] = useState(0);
  const [commune, setCommune] = useState();
  const handlecommune = (Selectedcommune) => {
    setCommune(Selectedcommune);
  };

  const handleWilaya = (SelectedWilaya) => {
    setWilaya(SelectedWilaya);
    const wilayaObject = Wilayas.find(
      (wilaya) => wilaya.name === SelectedWilaya
    );
    setWilayaId(wilayaObject.id);
  };

  const [fopen, setFOpen] = React.useState(false);
  const mehdi = () => {
    return <Footer />;
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

  const [nom, setNomdetablissement] = useState("");
  const handlenomChange = (event) => {
    setNomdetablissement(event.target.value);
  };

  const [adresse, setadresse] = useState("");
  const handleadresseChange = (event) => {
    setadresse(event.target.value);
  };

  const [typEtab, setTypEtab] = useState();
  const typeEtab = typEtab ? typEtab.value : "";
  const handletypEtabChange = (typEtab) => {
    setTypEtab(typEtab);
  };

  const [typeAc, setTypeAc] = useState();
  const typeAccueil = typeAc ? typeAc.value : "";

  const handletypeAcChange = (typeAc) => {
    setTypeAc(typeAc);
  };

  const [ageminAc, setAgeminAc] = useState();
  const ageminAccueil = ageminAc ? ageminAc.value : "";
  const handleageminAcChange = (ageminAc) => {
    setAgeminAc(ageminAc);
  };

  const [agemaxAc, setAgemaxAc] = useState();
  const agemaxAccueil = agemaxAc ? agemaxAc.value : "";
  const handleagemaxAcChange = (agemaxAc) => {
    setAgemaxAc(agemaxAc);
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

  const [mail, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [description, setdescription] = useState("");

  const handledescirptionChange = (event) => {
    setdescription(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlenumChange = (event) => {
    setNum(event.target.value);
  };

  const [value, setValue] = useState("");

  function handlecapChange(event) {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);

    if (isNaN(numericValue)) {
      setValue("");
    } else {
      setValue(numericValue);
    }
  }

  const [jourAc, setJourAc] = useState([]);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const delim = ",";
  const capacite = value;

  const [carteNationaleFile, setCarteNationaleFile] = useState(null);
  const [agrementFile, setAgrementFile] = useState(null);

  const handleCarteNationaleChange = (event) => {
    setCarteNationaleFile(event.target.files[0]);
  };

  const handleAgrementChange = (event) => {
    setAgrementFile(event.target.files[0]);
  };

  const [files, setfiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const selectImage = (e) => {
    const f = e.target.files;
    const filesArray = Array.from(f);
    if (filesArray.length > 10) {
      alert("Vous ne pouvez pas ajouter plus de 10 photos");
      return;
    }
    const imagesArray = filesArray.map((fl, index) => {
      const img = URL.createObjectURL(fl);
      return { img, index, fl };
    });

    const currentFiles = filesArray.map((file, id) => {
      return { file, id };
    });
    if (selectedImages.length + imagesArray.length <= 10) {
      setSelectedImages(selectedImages.concat(imagesArray));
    } else {
      alert("Vous ne pouvez pas ajouter plus de 10 photos");
    }
    if (files.length + currentFiles.length <= 10) {
      setfiles(files.concat(currentFiles));
    }
  };

  const handleSubmit = async (event) => {
    const localisation = commune + delim + Wilaya + delim + adresse;
    event.preventDefault();
    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("localisation", localisation);
    formData.append("typeAccueil", typeAccueil);
    const joursAccueilArray = jourAc.map((jour) => jour.value);
    formData.append("joursAccueil", JSON.stringify(joursAccueilArray));
    formData.append("typeEtab", typeEtab);
    formData.append("ageMin", ageminAccueil);
    formData.append("ageMax", agemaxAccueil);
    formData.append("pedagogie", pedagogie);
    formData.append("langue", langue);
    formData.append("capacite", capacite);
    formData.append("transport", transport);
    formData.append("alimentation", alimentation);
    formData.append("num", num);
    formData.append("mail", mail);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("carteNationale", carteNationaleFile);
    formData.append("agrement", agrementFile);
    selectedImages.forEach((image) => {
      formData.append("photos", image.fl);
    });

    try {
      await axios.post("http://localhost:8000/Creche", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Requête envoyée avec succès !");
      console.log(selectedImages);
      console.log(agrementFile);
      console.log(carteNationaleFile);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête :", error);
    }
    try {
      await axios.post("http://localhost:8000/notifAdm/add", {creche : nom});
      console.log("notif envoyée avec succès !");
    }catch (error){
      console.error("Erreur lors de l'envoi de la notif :", error);
    }
  };

  return (
    <>
      <NavAfter />

      <div className="flex flex-col items-center gap md:gap-y-0 m-6 ">
        <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10">
          {" "}
          Ajouter votre creche{" "}
        </p>
        <div className="  mb-[0.5px] mt-[-15px] w-[280px] md:w-[340px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mx-8  bg-opacity-5 items-center justify-center bg-rawdapurple mb-16 rounded-xl ">
          {" "}
          {/* start */}
          <div className="mx-auto  sm:px-6  ">
            <div className="relative flex-col  mx-2 my-2 w-full h-max justify-center items-center md:mb-10 mb-4">
              <div
                className="container flex flex-wrap p-2  md:flex-row 
                       items-center justify-center px-6 mx-auto mt-10 space-y-0 md:space-y-0"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex justify-start ">
                    <p
                      className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ml-4 sm:ml-none "
                    >
                      Les informations de ma creche
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    {" "}
                    {/* first flex */}
                    <div>
                      <input
                        type="text"
                        id="Nom de l'etablissement"
                        placeholder="Nom de l'etablissement"
                        required
                        onChange={handlenomChange}
                        className="rounded h-[38px] w-[210px] bg-white border-gray-700 border-opacity-30 border py-2 px-2   text-gray-700 placeholder-gray-600  shadow-sm text-base "
                      />
                    </div>
                    <div className="  sm:block">
                      <div className="flex space-x-4 m-2 md:m-0">
                        <div className="type">
                          <div className="dropdown-container w-[210px]">
                            <Select
                              name="Type d’etablissement"
                              options={Typeta}
                              placeholder="Type de creche "
                              maxlength="255"
                              value={typEtab}
                              onChange={handletypEtabChange}
                              isSearchable={true}
                              isMulti={false}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" sm:block">
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
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    {" "}
                    {/* second flex */}
                    <div className=" sm:block">
                      <div className="flex space-x-4 m-2 md:m-0">
                        <div className="jours">
                          <div className="dropdown-container w-[210px]  ">
                            <Select
                              name="Jours d’accueil"
                              options={jourac}
                              placeholder="Jours d'accueil"
                              value={jourAc}
                              //  onChange={handlejouracChange}
                              isSearchable={true}
                              isMulti={true}
                              onChange={(jourAc) => setJourAc(jourAc)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" sm:block">
                      <div className="flex space-x-4 m-2 md:m-0">
                        <div className="age min">
                          <div className="dropdown-container w-[210px]">
                            <Select
                              name="Age min d'accueil"
                              options={ageac}
                              placeholder="Age min d'accueil"
                              value={ageminAc}
                              onChange={handleageminAcChange}
                              isSearchable={true}
                              isMulti={false}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="  sm:block">
                      <div className="flex space-x-4 m-2 md:m-0">
                        <div className="age max">
                          <div className="dropdown-container w-[210px]">
                            <Select
                              name="Age max d'accueil"
                              options={ageac}
                              placeholder="Age max d'accueil"
                              value={agemaxAc}
                              onChange={handleagemaxAcChange}
                              isSearchable={true}
                              isMulti={false}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center  gap-4">
                    {" "}
                    {/* Third flex */}
                    <div className=" sm:block">
                      <div className="flex space-x-4 m-2 md:m-0 ">
                        <div>
                          <input
                            type="number"
                            id="capacite"
                            placeholder="Capacite"
                            min="0"
                            max="100"
                            step="1"
                            value={value}
                            onChange={handlecapChange}
                            required
                            className="rounded  h-[38px] w-[210px] bg-white   border-gray-700 border-opacity-30  opacity border py-2 px-2   text-gray-700 placeholder-gray-600 shadow-sm text-base "
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" sm:block">
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
                              required
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
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
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
                              required
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
                              required
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
                        className="rounded  h-[38px] w-[210px]  bg-white border-gray-700 border-opacity-30 opacity border py-2 px-2  placeholder-gray-600 shadow-sm text-base "
                        onChange={handleprixChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center items-center">
                    {" "}
                    {/* Fifth flex */}
                    <div>
                      <input
                        type="text"
                        id="Description"
                        placeholder="Description (150 mots max)"
                        required
                        onChange={handledescirptionChange}
                        className="p-4 rounded bg-white border-gray-700 border-opacity-30 w-[210px]  md:w-[670px] h-[200px]   opacity border py-2 px-6   text-gray-700 placeholder-gray600 shadow-sm text-base "
                      />
                    </div>
                  </div>

                  <div className="flex justify-start ">
                    <p
                      className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ml-4 sm:ml-none"
                    >
                      La localisation de mon établissement
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center items-center">
                    {" "}
                    {/* Sixth flex */}
                    <div className="  sm:block ">
                      <div className="flex space-x-4 m-2 md:m-0">
                        <select
                          name="wilaya"
                          className="md:w-[310px] w-[210px] h-[38px] rounded p-2 border border-gray-700 border-opacity-30 bg-white outline-none"
                          onChange={(wilaya) =>
                            handleWilaya(wilaya.target.value)
                          }
                          required
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
                    <div className=" sm:ml-6 sm:block ">
                      <div className="flex space-x-4 m-2 md:m-0">
                        <select
                          name="commune"
                          className="md:w-[310px] w-[210px] h-[38px] rounded p-2 border border-gray-700 border-opacity-30 bg-white outline-none"
                          onChange={(commune) =>
                            handlecommune(commune.target.value)
                          }
                          required
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
                  </div>

                  <div className="flex flex-wrap justify-center">
                    {" "}
                    {/* Seventh flex */}
                    <div>
                      <input
                        type="text"
                        id="L’adresse complète de l’établissement"
                        placeholder="L’adresse complète de l’établissement"
                        maxlength="255"
                        required
                        onChange={handleadresseChange}
                        className="rounded w-[210px] h-[38px] md:w-[650px]  bg-white border-gray-700 border-opacity-30 opacity border py-2 px-2  text-gray-700 placeholder-gray-600 shadow-sm text-base "
                      />
                    </div>
                  </div>

                  <div className="flex justify-start ">
                    <p
                      className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ml-4 sm:ml-none"
                    >
                      Photos
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center">
                    {" "}
                    {/* Eight flex */}
                    <div
                      id="photosSection"
                      className=" w-full  flex-wrap  flex flex-row items-center justify-center gap-[20px]"
                    >
                      <div className="w-[250px] h-[350px] flex flex-col justify-center items-center gap-y-[20px] bg-white border-2 border-dashed rounded-[10px]">
                        <div className="w-[40px] h-[40px] rounded-[5px]">
                          <img
                            src={galery}
                            className=" rounded-[8px] w-[100%] h-[100%] object-cover"
                          ></img>
                        </div>
                        <label
                          for="input"
                          className="text-lg text-rawdablack text-opacity-30 text-center m-5 cursor-pointer"
                        >
                          Vous pouvez ajouter jusqu'à 10 photos
                        </label>
                        <input
                          type="file"
                          multiple
                          accept="image/png, image/jpg, image/gif, image/jpeg, image/pdf"
                          name="img"
                          id="input"
                          onChange={selectImage}
                          required
                          className="hidden"
                        ></input>
                      </div>

                      {selectedImages.length <= 10 &&
                        selectedImages &&
                        selectedImages.map((image, i) => {
                          return (
                            <div
                              key={i}
                              className="w-[250px] h-[350px] rounded-[5px] relative"
                            >
                              <div
                                onClick={() => {
                                  setSelectedImages(
                                    selectedImages.filter(
                                      (e) => e.img != image.img
                                    )
                                  ); //display
                                  setfiles(
                                    files.filter((f) => f.file != image.fl)
                                  ); //data
                                }}
                                className=" cursor-pointer z-50 w-[25px] h-[25px] bg-[#D3CAED] absolute ml-[220px] mt-[5px] flex justify-center items-center"
                              >
                                <img
                                  src={exit}
                                  className="w-[60%] h-[60%] object-cover"
                                ></img>
                              </div>

                              <img
                                className="w-[100%] h-[100%] object-cover rounded-[5px]"
                                src={image.img}
                              ></img>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div className="flex justify-start ">
                    <p
                      className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ml-4 sm:ml-none"
                    >
                      Contact
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-10">
                    {" "}
                    {/* Tenth flex */}
                    <div>
                      <input
                        type="tel"
                        id="num"
                        placeholder="Numero de telephone"
                        pattern="[0-9]{10}"
                        maxlength="10"
                        required
                        onChange={handlenumChange}
                        className="rounded w-[210px] h-[38px] md:w-[310px] bg-white border-gray-700 border-opacity-30 opacity border py-2 px-2 text-gray-700 placeholder-gray-600 shadow-sm text-base "
                      />
                    </div>
                    <div>
                      <input
                        id="Email"
                        type="email"
                        placeholder="Adresse mail"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                        maxlength="255"
                        onChange={handleEmailChange}
                        className="rounded w-[210px] h-[38px] md:w-[310px] bg-white border-gray-700 border-opacity-30 opacity border py-2 px-2  text-gray-700 placeholder-gray-600 shadow-sm text-base "
                      />
                    </div>
                  </div>

                  <div className="flex justify-start ">
                    <p
                      className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ml-4 sm:ml-none "
                    >
                      Verification
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-10">
                    {" "}
                    {/* eleventh flex */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-rawdablack font-semibold">
                        Agrement
                      </h4>

                      <div>
                        <input
                          type="file"
                          placeholder="Agrement "
                          accept="image/png, image/jpg, image/gif, image/jpeg, image/pdf"
                          id="file-upload"
                          onChange={handleAgrementChange}
                          className="rounded w-[250px] h-[38px] md:w-[310px]  bg-white border-gray-700 border-opacity-30 opacity border py-2 px-2   text-gray-700 placeholder-gray-600 shadow-sm text-base "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-rawdablack font-semibold">
                        Piece d'identite
                      </h4>

                      <div>
                        <input
                          type="file"
                          placeholder="Piece d'identite"
                          accept="image/png, image/jpg, image/gif, image/jpeg, image/pdf"
                          id="file-upload"
                          onChange={handleCarteNationaleChange}
                          required
                          className="rounded w-[250px] h-[38px] md:w-[310px]  bg-white border-gray-700 border-opacity-30 opacity border py-2 px-2 text-gray-700 placeholder-gray-600 shadow-sm text-base "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center">
                    {" "}
                    {/* twelve flex */}
                    <div className="flex justify-center md:justify-start">
                      {/* <button
                        href="#"
                        className="p-6 px-[100px] text-lg  text-rawdawhite bg-rawdapurple rounded-full baseline shadow-md"
                      >
                        {" "}
                        Ajouter ma creche{" "}
                      </button> */}

                      <button
                        onClick={handleButtonClick}
                       // onClick={handleSubmit}
                        id="s'inscrire"
                        type="button"
                        className="rounded-full font-medium text-2xl bg-rawdapurple px-10 py-4 text-rawdawhite hover:bg-rawdapurple hover:scale-105 duration-200   m-6"
                      >
                        Ajouter ma creche
                      </button>
                      {showPopup && (
                      <div className="popup">
                          <div className="bg-white p-4 shadow-md rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                           <h1 className="text-rawdapurple">Demande envoyée.</h1>
            <p>Votre demande d'ajout de crèche a été enregistrer avec success, nous vous contacterons prochainement pour vous informez du resultat du traitement.</p>
            <div className="flex gap-4"> 
            <button className="rounded font-medium text-lg mt-2  bg-rawdawhite px-4 py-2 text-rawdapurple hover:bg-rawdapurple hover:bg-opacity-50 hover:text-rawdawhite  " onClick={handleRedirect} >Revenir a la page d'accueil</button>
            <button className="rounded font-medium text-lg mt-2 bg-rawdawhite px-4 py-2 text-rawdapurple hover:bg-rawdapurple hover:bg-opacity-50 hover:text-rawdawhite  " onClick= {closePopup}>Fermer</button>
            </div>
                          </div>
                        </div>
 )}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* start */}
      </form>

      <Footer />
    </>
  );
}

export default AddCreche;
