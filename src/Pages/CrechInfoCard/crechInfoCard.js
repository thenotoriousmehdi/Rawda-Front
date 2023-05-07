import Infocreche from "./infocreche";
import Localisation from "./localisation";
import Footer from "../../Components/Footer";
import Avis from "./avis";
import ContactSection from "./contactSection";
import Header from "../../Components/Header";
import useFetch from "./useFetch";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CrechInfoCard() {
  const [creche, setCreche] = useState(null);
  const { id } = useParams();
//const creche = creches[id-1];
  const fetchCreche = async () => {
    try {
      const response = await axios(`http://localhost:8000/Creche/${id}`);
      setCreche(response.data);
      console.log(JSON.stringify(creche));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchCreche();
  }, [id]);

  return (
    <div>
      {creche && (
        <div className="App">
      
          <Infocreche creche={creche}  />
          <Localisation /> 
          <Avis creche={creche}/>
          <ContactSection creche={creche}/>
          <Footer /> 
       </div>
         )}    
           
    </div>
  );
}
