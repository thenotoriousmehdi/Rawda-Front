
import Select from 'react-select'
import Footer from "../Components/Footer";
import NavAfter from "../Components/NavAfter";
import React, { useState } from "react";

import galery from "../assets/galery.svg";
import exit from "../assets/exit1.svg";


                    

function AddCreche() {
  const wilaya = [
   {value :"adrar", label:"Adrar"},"Chlef", "Laghouat",  "Oum El Bouaghi", "Batna", "Béjaïa",  "Biskra",
    "Bechar", "Blida", "Bouira",  "Tamanrasset",   "Tbessa",  "Tlemcen", "Tiaret",
    "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Setif",  "Saeda", "Skikda",  "Sidi Bel Abbes",
    "Annaba", "Guelma",  "Constantine", "Medea", "Mostaganem",  "M'Sila", "Mascara",
    "Ouargla",  "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj",  "Boumerdes",
    "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila",
    "Ain Defla", "Naama",  "Ain Temouchent",  "Ghardaefa", "Relizane", "El M'ghair",  "El Menia",
    "Ouled Djellal", "Bordj Baji Mokhtar", "Béni Abbès",  "Timimoun", "Touggourt",
    "Djanet",  "In Salah",  "In Guezzam",
  ]

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

  const [nom, setNom] = useState('');
  const [typeta, setTypeta] = useState('');
  const [typeac, setTypeac] = useState('');
  const [jouracc, setJourac] = useState('');
  const [ageacc, setAgeac] = useState('');
  const [Capacitee, setCapacite] = useState('');
  const [pedagogie, setPedagogie] = useState('');
  const [languee, setLangue] = useState('');
  const [alimentation, setAlimentation] = useState('');
  const [transport, setTransport] = useState('');
  const [prix, setPrix] = useState('');
  const [wilayaa, setWilaya] = useState('');
  const [nomc, setNomc] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [adresse, setAdresse] = useState('');

  const handlenomChange = (event) => {
    setNom(event.target.value);
  }

  const handletypetaChange = (event) => {
    setTypeta(event.target.value);
  }
  const handlejouraccChange = (event) => {
    setJourac(event.target.value);
  }
  const handletypeacChange = (event) => {
    setTypeac(event.target.value);
  }
  const handleageacChange = (event) => {
    setAgeac(event.target.value);
  }
  const handlecapaciteeChange = (event) => {
    setCapacite(event.target.value);
  }
  const handlepedagogieChange = (event) => {
    setPedagogie(event.target.value);
  }
  const handlelangueChange = (event) => {
    setLangue(event.target.value);
  }
  const handlealimentationChange = (event) => {
    setAlimentation(event.target.value);
  }
  const handletransportChange = (event) => {
    setTransport(event.target.value);
  }
  const handleprixChange = (event) => {
    setPrix(event.target.value);
  }
  const handlenomcChange = (event) => {
    setNomc(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlenumChange = (event) => {
    setNum(event.target.value);
  }
  const handleadresseChange = (event) => {
    setAdresse(event.target.value);
  }


  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom:', nom);
    console.log('Type detablissement:', typeta);
    console.log('type daccueil:', typeac);
    console.log('jour daccueil:', jouracc);
    console.log('age daccueil:', ageacc);
    console.log('capacite:', Capacite);
    console.log('Langue:', langue);
    console.log('Pedagogie:', pedagogie);
    console.log('Alimentation:', alimentation);
    console.log('Transport:', transport);
    console.log('Prix:', prix);
    console.log('Nom complet:', nomc);
    console.log('Email:', email);
    console.log('Numero de †elephone:', num);
    console.log('Adresse:', adresse);

    
  }

  
   
  
  const [files, setfiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const selectImage = (e) => {
    const f = e.target.files;
    const filesArray = Array.from(f);
    if(filesArray.length>10){
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
    if(selectedImages.length+imagesArray.length<=10){
      setSelectedImages(selectedImages.concat(imagesArray));

    }else{
      alert("Vous ne pouvez pas ajouter plus de 10 photos")
    }
    if(files.length+currentFiles.length<=10){
      setfiles(files.concat(currentFiles));

    }
  };






  return(
    <>
    
      <NavAfter />

      <div className="flex flex-col items-center gap md:gap-y-0 m-6 ">
        <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10">  Ajouter votre creche </p>
      <div className="  mb-[0.5px] mt-[-15px] w-[280px] md:w-[340px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div></div>
 

      <form onSubmit={handleSubmit}>
<div className="mx-8  bg-opacity-5 bg-rawdapurple mb-16 rounded-xl "> {/* start */}
    <div className="mx-auto  sm:px-6  ">
      <div className="relative flex-col mx-2 my-2 w-full h-max justify-center items-center md:mb-10 mb-4"> 
        <div className="container flex flex-wrap p-2  md:flex-row 
                       items-center justify-between px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col gap-8">


          <div className="flex justify-start ">
      <p
          className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ">
          Les informations de ma creche
        </p>
        </div>


<div className="flex flex-wrap justify-center"> {/* first flex */}



                           <div >
                             <input
                             type="text"
                             id="Nom de l'etablissement"
                              placeholder="Nom de l'etablissement"
                            required
                            onChange={handlenomChange}
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
                            onChange={handleprixChange}
                           className="rounded-md w-[250px] h-[38px] md:w-[210px] bg-white border-gray-500 opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>




</div>

<div className="flex flex-wrap justify-center"> {/* Fifth flex */}
<div >
                             <input
                             type="text"
                             id="Description"
                              placeholder="Description (150 mots max)"
                            required
                           className="rounded-md w-[250px] h-[38px] md:w-[670px] md:h-[200px] bg-white border-rawdapurple opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>


</div>



<div className="flex justify-start ">
      <p
          className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ">
         La localisation de mon établissement  
        </p>
        </div>


        <div className="flex flex-wrap justify-center"> {/* Sixth flex */}

        <div className=" sm:ml-6 sm:block ">
                          <div className="flex space-x-4 m-2 md:m-0">
    <div className="Wilaya">
      <div className="dropdown-container w-[310px]">
        <Select
        options={wilaya}
        name="Wilaya"
          placeholder="Wilaya"
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
    <div className="Commune">
      <div className="dropdown-container w-[310px]">
        <Select
        options={wilaya}
        name="Commune"
          placeholder="Commune"
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


        <div className="flex flex-wrap justify-center"> {/* Seventh flex */}

        <div >
                             <input
                             type="text"
                             id="L’adresse complète de l’établissement"
                              placeholder="L’adresse complète de l’établissement"
                            required
                            onChange={handleadresseChange}
                           className="rounded-md w-[250px] h-[38px] md:w-[650px] bg-white border-gray-500 opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>

</div>





<div className="flex justify-start ">
      <p
          className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ">
         Photos 
        </p>
        </div>

 <div className="flex flex-wrap justify-center"> {/* Eight flex */}

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
              className="text-lg text-[#B3A39B] text-center m-5 cursor-pointer"
            >
              Vous pouvez ajouter jusqu'à 10 photos
            </label>
            <input
              type="file"
              multiple
              accept="image/png, image/jpg, image/gif, image/jpeg"
              name="img"
              id="input"
              onChange={selectImage}
              className="hidden"
            ></input>
          </div>

          {selectedImages.length <= 10 &&
            selectedImages &&
            selectedImages.map((image,i) => {
              return (
                <div key={i} className="w-[250px] h-[350px] rounded-[5px] relative">
                  <div
                    onClick={() => {
                      setSelectedImages(
                        selectedImages.filter((e) => e.img != image.img)
                      ); //display
                      setfiles(files.filter((f) => f.file != image.fl)); //data
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
            md:text-xl ">
         Contact
        </p>
        </div>



 <div className="flex flex-wrap justify-center"> {/* Nineth flex */}

 <div >
                             <input
                             type="text"
                             id="nom"
                              placeholder="Nom complet"
                            required
                            onChange={handlenomcChange}
                           className="rounded-md w-[250px] h-[38px] md:w-[310px] bg-white border-rawdapurple opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>

                           <div >
                             <input
                             type="text"
                             id="mail"
                              placeholder="Adresse mail"
                            required
                            onChange={handleEmailChange}
                           className="rounded-md w-[250px] h-[38px] md:w-[310px] bg-white border-rawdapurple opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>





</div>




<div className="flex flex-wrap justify-center"> {/* Tenth flex */}
<div >
                             <input
                             type="text"
                             id="num"
                              placeholder="Numero de telephone"
                            required
                            onChange={handlenumChange}
                           className="rounded-md w-[250px] h-[38px] md:w-[310px] bg-white border-rawdapurple opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>

                           <div >
                             <input
                             type="text"
                             id="Adresse"
                              placeholder="Adresse"
                            required
                            onChange={handleadresseChange}
                           className="rounded-md w-[250px] h-[38px] md:w-[310px] bg-white border-rawdapurple opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>


</div>

<div className="flex justify-start ">
      <p
          className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-2
            md:text-xl ">
        Verification
        </p>
        </div>
        <div className="flex flex-wrap justify-center"> {/* eleventh flex */}
        <div >
                             <input
                             type="text"
                             id="Adresse"
                              placeholder="Agrement"
                            required
                           className="rounded-md w-[250px] h-[38px] md:w-[310px] bg-white border-rawdapurple opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>


                           <div >
                             <input
                             type="text"
                             id="Adresse"
                              placeholder="Carte Nationale"
                            required
                           className="rounded-md w-[250px] h-[38px] md:w-[310px] bg-white border-rawdapurple opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>


        </div>



        <div className="flex flex-wrap justify-center"> {/* twelve flex */}

        <div className="flex justify-center md:justify-start">
            <button
              href="#"
              className="p-6 px-[100px] text-lg  text-rawdawhite bg-rawdapurple rounded-full baseline shadow-md"
            >
              {" "}
              Ajouter ma creche 
              {" "}
            </button>
          </div>

        </div>






          </div>
        </div>
      </div>
    </div>
</div> {/* start */}
</form>

     
      <Footer />
  
    </>
  );
}

export default AddCreche;
