import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";
 import About from "./Components/About"; 
 import Home from "./Pages/Home";
 import AddCreche from "./Pages/AddCreche";
 import Login from "./Pages/Login";
 import Signup from "./Pages/Signup";
 import mehdi from "./assets/mehdi.jpeg";
import Notification from "./Components/Notification";
import Notifications from "./Pages/Notifications";
import ModifierProfil from "./Components/ModifierProfil";
import CrechInfoCard from "./Pages/CrechInfoCard/crechInfoCard";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import {Routes, Route} from 'react-router-dom';
import VoirProfil from "./Components/VoirProfil";
function App() {

  return (


 
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/Signup' element={<Signup/>} />
<Route path='/Login' element={<Login/>} />
<Route path='/Profile/id:' element={<Profile/>} />
<Route path='/Notifications' element={<Notifications/>} />
<Route path='/Dahboard' element={<Dashboard/>} />
<Route path='/CrecheInfoCard' element={<CrechInfoCard/>} />
<Route path='/AddCreche' element={<AddCreche/>} />
</Routes>




/*
    <Signup/> 
 <CrechInfoCard/> 
   <Dashboard nom="Mehdi"/>  
       
   
   
        
       
         <CrechInfoCard/> 
    
         <Home/>   */
         //<VoirProfil photo={mehdi} nomc="Mehdi Mamouni" role="Parent" email="km_mamouni@esi.dz" num="056000000" daten="23/07/2002" adresse="Rue de la paix" EI="Jhon Doe" />    
   
        
  )
}
export default App;

