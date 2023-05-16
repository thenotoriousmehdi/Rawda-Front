import React , { useRef, useState } from "react";
import mehdi from "../../assets/mehdi.jpeg"
import wassim from "../../assets/wassim.PNG"
import ines from "../../assets/ines.jpeg"
import kahina from "../../assets/kahina.jpg"
import Member from "./Member";
import mouloud from "../../assets/mouloud.jpg"
import amine from "../../assets/amine.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import "./Style.css";
import { useMediaQuery } from "react-responsive";
export default function Team() {
 
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <section
    className=" sm:w-full h-[900px] bg-rawdawhite flex flex-col items-center justify-center"
    id="team"
  >




<div className="flex flex-col gap-8 mb-[100px] sm:mb-[300px] mt-10 sm:mt-[-120px]">

<div className="flex flex-col items-center gap md:gap-y-0 mb-2 mt-24 ">
          <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10">
            {" "}
            Rencontrez L'equipe de Rawda.{" "}
          </p>
          <div className="  mb-[0.5px] mt-[-15px] w-[70px] md:w-[480px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div>
        </div>





<Swiper navigation={true} modules={[Navigation]} className=" w-[500px] h-[400px]  sm:w-[600px] sm:h-[400px] md:w-[900px] md:h-[550px]  " slidesPerView={isMobile ? 1 : 2}>
        <SwiperSlide className="flex flex-row justify-evenly items-center"><Member img={mehdi} name="MEHDI MAMOUNI" description="Etudiant 2CP G06, Designer et développeur web Front-end "facebook="https://www.facebook.com/profile.php?id=100052880411339" github="https://github.com/thenotoriousmehdi" linkedin="https://www.linkedin.com/in/mehdi-mamouni-68a010211/"></Member>    </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-evenly items-center"><Member img={kahina} name="SAADAOUI KAHINA" description="Etudiante 2CP G06, développeur web Front-end"></Member>    </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-evenly items-center"><Member img={wassim} name="WASSIM BELDJOUDI" description="Etudiant 2CP G06, développeur web Back-end" facebook="https://www.facebook.com/wassim.beldjoudi.9/about" github="https://github.com/mythsSIMOU" linkedin="https://www.linkedin.com/in/beldjoudi-wassim-247aaa276/"></Member>    </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center"><Member img={ines} name="INES MEDERBEL" description="Etudiante 2CP G01, développeur web Front-end"></Member></SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center"><Member img={mouloud} name="MOULOUD SERIR" description="Etudiant 2CP G06, développeur web Back-end"></Member></SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center items-center"><Member img={amine} name="TIFOUN AMINE" description="Etudiant 2CP G02, développeur web Back-end"></Member></SwiperSlide>
      </Swiper>

      </div>

</section>
  );
}