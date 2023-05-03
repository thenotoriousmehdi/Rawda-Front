 import Home from "./Pages/Home";
 import AddCreche from "./Pages/AddCreche";
 import Login from "./Pages/Login";
 import Signup from "./Pages/Signup";
import Notifications from "./Pages/Notifications";
import CrechInfoCard from "./Pages/CrechInfoCard/crechInfoCard";
import Dashboard  from "./Pages/Dashboard/Dashboard";
import {Routes, Route} from 'react-router-dom';
import RsltRechercheCreches from "./Pages/RsltRechercheCreches";

function App() {
                     
  return (

   

<>
  
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/Signup' element={<Signup/>} />
<Route path='/Login' element={<Login/>} />
<Route path='/Notifications' element={<Notifications/>} />
<Route path='/Dashboard' element={<Dashboard/>} />
<Route path='/AddCreche' element={<AddCreche/>} />
<Route path='/creches' element={ <RsltRechercheCreches/>}  /> 
<Route path='/CrechInfoCard' element={ <CrechInfoCard/>}  /> 
<Route path='/creches/:id' element={ <CrechInfoCard/>}  /> 
</Routes>

</>      
  )
}
export default App;