
import CrecheCard from "./CrecheCard";
export default function Crechesmieuxnotees(){
return (

<div className="flex flex-col gap-2 p-6"> 

<div className="flex flex-col items-center gap md:gap-y-0">
        <p className="  text-center text-3xl md:text-4xl font-bold text-Poppins z-10 ">Les crèches les mieux notées</p>
      <div className="  mb-[20px] mt-[-15px] w-[200px] md:w-[500px] h-[20px] md:mt-[-15px] bg-rawdayellow shadow-rawdayellow "></div></div>

<div className="flex justify-center  ">
<CrecheCard/>




</div>




</div>






) ;

}