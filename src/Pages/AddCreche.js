
import Select from 'react-select'
import Footer from "../Components/Footer";
import NavAfter from "../Components/NavAfter";
import React, { useState } from "react";
import arrow from "../assets/arrow.png"




                    

function AddCreche() {
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
    { value: "Pikler-Loczy", label: "Pikler-Loczy" },
  ]
  const Typeac = [
    { value: "Regulier", label: "Regulier" },
    { value: "Ocasionnel", label: "Ocasionnel" }
  ]
  
  const langue =[
    { value: "Arabe", label: "Arabe" },
    { value: "Francais", label: "Francais" },
    { value: "Anglais", label: "Anglais" },
  ]
  
  
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

  
   /* const [nomEtab, setNomEtab] = useState('');
  
  const handleNomEtabChange = (event) => {
    setNom(event.target.value);
  }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom de letablissement:', Nom);
    
  }  */
  







  return(
    <>
    
      <NavAfter />

      <div className="flex flex-col items-center gap md:gap-y-0 m-6 ">
        <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10">  Ajouter votre creche </p>
      <div className="  mb-[0.5px] mt-[-15px] w-[280px] md:w-[340px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div></div>
 


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
                           className="rounded-lg w-[250px] h-[50px] md:w-[400px] border-rawdapurple opacity-40 border py-2 px-2 mx-4  text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>



                           <div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                         <select
                          name="Type d’établissement"
                         className="w-[250px] h-[50px] bg-none bg-opacity-5 rounded-2 p-3 border border-rawdapurple outline-none" 
                          >
                        <option value="">Type d’établissement</option>
                        {Typeta.map((item,i) => {
                       return (
                        <option
                        key={i}
                        className="hover:bg-rawdapurple"
                        value={item.value}
                        >
                        {item.label}
                       </option>
                       );
                       })}
                       </select>
                    </div>
                  </div>



</div>



<div className="flex flex-wrap justify-center"> {/* second flex */}


<div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                         <select
                          name="Type d’accueil"
                         className="w-[250px] h-[38px] bg-none bg-opacity-5 rounded-2 p-3 border border-rawdapurple outline-none" 
                          >
                        <option value="">Type d’accueil</option>
                        {Typeac.map((item,i) => {
                       return (
                        <option
                        key={i}
                        className="hover:bg-rawdapurple"
                        value={item.value}
                        >
                        {item.label}
                       </option>
                       );
                       })}
                       </select>
                    </div>
                  </div>



                  <div className=" sm:ml-6 sm:block">
                          <div className="flex space-x-4">
    <div className="jours">
      <div className="dropdown-container w-[190px]  ">
        <Select
        name="Type d’accueil"

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
                          <div className="flex space-x-4">
    <div className="age">
      <div className="dropdown-container w-[190px]">
        <Select
        name="Type d’accueil"
          options={ageac}
          placeholder="Ages d'accueil"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
    </div>
    </div>




</div>













          </div>
        </div>
      </div>
    </div>
</div> {/* start */}


     {/*  <div className="mx-8 rounded-lg bg-rawdpurple bg-opacity-5 ">
           <div className="mx-6 my-6 gap-4 sm:px-6 lg:px-10 ">
               
              <div className="container flex-row  w-full h-max justify-center items-center md:mb-10 mb-4">
              
              <div className="flex justify-start p-4">
      <p
          className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-4
            md:text-xl ">
          Les informations de ma creche
        </p>
        </div>

        <div className="w-full h-fit flex flex-col items-center justify-center gap-y-[50px]">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[15px] md:gap-x-[20px]">


                 
                        
                        
                          <div >
                             <input
                             type="text"
                             id="Nom de l'etablissement"
                              placeholder="Nom de l'etablissement"
                            required
                           className="rounded-lg w-[250px] h-[50px] md:w-[400px] border-rawdapurple opacity-40 border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>

                             <div className="flex space-x-4">
                             <input
                              type="text"
                              id="Type de l'etablissement"
                              placeholder="Type de l'etablissement"
                              required
                              className="rounded-lg w-[250px] h-[50px] md:w-[300px] border-rawdapurple opacity-40 border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>

                           

                           </div>
                           
                           </div>
                           </div>


                      </div> 

             


         </div>
        */}

     
      <Footer />
  
    </>
  );
}

export default AddCreche;
