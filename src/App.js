import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Pages/Home";
import React, { useState } from "react";
import AddCreche from "./Pages/AddCreche";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import mehdi from "./assets/mehdi.jpeg";
import Notification from "./Components/NotifRdv";
import Notifications from "./Pages/Notifications";
import NotificationsAdm from "./Pages/NotificationsAdm";
import ModifierProfil from "./Pages/Profile/ModifierProfil";
import CrechInfoCard from "./Pages/CrechInfoCard/crechInfoCard";
import Dashboard from "./Pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import VoirProfil from "./Pages/Profile/VoirProfil";
import RsltRechercheCreches from "./Pages/RsltRechercheCreches";
import Search from "./Components/Search";
import useFetch from "./Pages/CrechInfoCard/useFetch";
import data from "./data/db.json";
import Help from "./Pages/Help";
import AddAdmin from "./Pages/AddAdmin";
import Rawdati from "./Pages/Rawdati"

import HomeAfter from "./Pages/HomeAfter";
import ModifierCreche from "./Pages/Profile/ModifierCreche";
import MotDePasseOublie from "./Pages/MotDePasseOublie";
function App() {
  const [userRole, setUserRole] = useState("");
  const creches = data["creches"];
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route
        path="/VoirProfil/"
        element={
          <VoirProfil
            photo={mehdi}
            nomc="Mehdi Mamouni"
            role="Parent"
            email="km_mamouni@esi.dz"
            num="056000000"
            daten="23/07/2002"
            adresse="Rue de la paix"
          />
        }
      />
      <Route path="/Notifications" element={<Notifications />} />
        <Route path="/NotificationsAdm" element={<NotificationsAdm />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/AddCreche" element={<AddCreche />} />
      <Route path="/creches/:id/AddCreche" element={<AddCreche />} />
      <Route path="/Rawdati" element={<Rawdati />} />
      <Route
        path="/CrechInfoCard"
        element={<CrechInfoCard reches={creches} />}
      />
      <Route
        path="/creches"
        element={<RsltRechercheCreches creches={creches} />}
      />
      <Route
        path="/creches/:id"
        element={<CrechInfoCard creches={creches} />}
      />
      <Route
        path="/Search"
        element={
          <div className=" mt-12 ml-4 mr-4">
            <Search />
          </div>
        }
      />
      <Route
        path="/RsltRechercheCreches"
        element={<RsltRechercheCreches creches={creches} />}
      />
      <Route path="/Help" element={<Help />} />
      <Route path="/AddAdmin" element={<AddAdmin />} />
      <Route path="/ModifierCreche/:id" element={<ModifierCreche />} />
      <Route path="MotDePasseOublie" element={<MotDePasseOublie />} />
    </Routes>

    
  );
}
export default App;
