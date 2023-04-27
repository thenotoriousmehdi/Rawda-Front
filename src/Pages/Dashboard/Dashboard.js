import NavAfter from "../../Components/NavAfter";
import Notification from "../../Components/Notification";
import { Stat } from "./Stat";

export const Dashboard = ({nom}) => {
return(
    <>
    <div className="h-full bg-rawdapurple bg-opacity-10">
    <NavAfter />
    
    

<div className="flex items-start flex-col gap-2">

<div className="font-Medium text-xl text-rawdablack font-Poppins ml-[100px] mt-[30px] ">    
<h1>
    Bonjour {nom}
</h1>
</div> 

<div className="flex gap-4">

<div className="flex flex-col gap-4">
<Stat/>





</div>








</div>







</div>













    </div>
    
    </>

);
}