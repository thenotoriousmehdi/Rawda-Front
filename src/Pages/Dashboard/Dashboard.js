import NavAfter from "../../Components/NavAfter";
import Notification from "../../Components/Notification";
import { Stat } from "./Stat";
import Notif from "./Notif";
import mehdi from "../../assets/mehdi.jpeg"
import linepurple from "../../assets/linepurple.svg"
import lineyellow from "../../assets/lineyellow.svg"
export const Dashboard = ({nom}) => {
return(
    <>
    <div className="h-full bg-rawdapurple bg-opacity-10">
    <NavAfter />
    
    

<div className="flex items-start flex-col gap-2">

<div className="font-Medium text-xl text-rawdablack font-Poppins ml-[100px] mt-[30px] ">    
<h1>
    Bonjour, {nom}
</h1>
</div> 

<div className="flex gap-4">

<div className="flex flex-col gap-1">
<Stat line={linepurple} titre="Creches ajoutees" number="2500" pourcentage="4.5"/>
<Stat line={lineyellow} titre="Enfants inscris" number="6000" pourcentage="8"/>
</div>


{/* <Notif type="Demande de rendez-vous" photo={mehdi} nomc="Mehdi MAMOUNI" heuree="2" heure="16:30" date="27/05/2023" num="0560000000" email="km_mamouni@esi.dz"/> */}





</div>







</div>













    </div>
    
    </>

);
}