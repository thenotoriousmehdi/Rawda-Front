import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import Infocreche from "./CrechInfoCard/infocreche";
import Localisation from "./CrechInfoCard/localisation";
import Avis from "./CrechInfoCard/avis";
import ContactSection from "./CrechInfoCard/contactSecRawdati";
import Footer from "../Components/Footer";

export default function Rawdatti() {
  const [creche, setCreche] = useState(null);
  const fetchCreche = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/Rawdati`);
      setCreche(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("errrr");
    }
  };

  useEffect(() => {
    fetchCreche();
  }, []);

  return (
    <div>
      {creche ? (
        <div className="App">
          <Nav />
          <Infocreche creche={creche} />
          <Localisation creche={creche} />
          <Avis creche={creche} />
          <ContactSection creche={creche} />
          <Footer />
        </div>
      ) : (
        <div>
          <Nav />
          <div className="mb-44  m-10 border border-rawdapurple rounded-lg  py-44  px-12">
            <p
              className=" font-body text-slate-500 font-bold text-center
      "
            >
              {" "}
              Vous n'avez pas encore ajouter une creche{" "}
            </p>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
