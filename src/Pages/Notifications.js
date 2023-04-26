import Notification from "../Components/Notification";
import NavAfter from "../Components/NavAfter";
import mehdi from "../assets/mehdi.jpeg";
import kahina from "../assets/kahina.jpg";
import mouloud from "../assets/mouloud.jpg"
function Notifications (){
    
   
return (
    <><NavAfter /><div className="bg-rawdawhite">



        <div className="flex flex-col items-center gap pt-8 md:gap-y-0 ">
            <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdapurple z-10">  Notifications</p>
            <div className="  mb-[0.5px] mt-[-15px] w-[190px] md:w-[220px] h-[20px]  bg-rawdawhite shadow-rawdayellow "></div></div>

        <div className="flex flex-col gap-6 items-center mt-[30px] p-8">



            <Notification type="Demande de rendez-vous" photo={mehdi} nomc="Mehdi MAMOUNI" heuree="2" heure="16:30" date="27/05/2023" num="0560000000" email="km_mamouni@esi.dz" />
            <Notification type="Reservation" photo={kahina} nomc="Kahina SAADAOUI" heuree="4" heure="17:40" date="28/05/2023" num="0560000001" email="kk_saadaoui@esi.dz" />
            <Notification type="Demande de rendez-vous" photo={mouloud} nomc="Mouloud SERIR" heuree="5" heure="13:20" date="26/05/2023" num="0560000002" email="km_serir@esi.dz" />
        </div>


    </div></>

);

}
export default Notifications;