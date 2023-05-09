import React, { useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CrecheCard from "./CrecheCard";
import { Link } from 'react-router-dom';
import axios from "axios";

const Crechesmieuxnotees = ({creches}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
      
        const response = await axios.get('http://localhost:8000/Home',config);
        setData(response.data);  
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData();
  }, []);
  
  return (
    <>
      <div
        id="Creche"
        className=" relative flex flex-col w-full h-screen justify-center items-center   "
      >
        <div className="flex flex-col items-center gap md:gap-y-0 mb-8 ">
          <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10">
            {" "}
            Les crèches les mieux notées{" "}
          </p>
          <div className="  mb-[0.5px] mt-[-15px] w-[70px] md:w-[480px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div>
        </div>
        <div className="w-full ">
  <Swiper
  slidesPerView={3}
  spaceBetween={30}
    cssMode={true}
    navigation
    pagination={{ clickable: true }}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    
  >
    {data.map((e) => {
      return (
        <SwiperSlide key={e._id}>
          <div className=" flex relative flex-col h-4/6 rounded-lg items-center justify-center p-7 gap-4">
            <CrecheCard creche={e} />
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>



      </div>
        

        </div>
       
    
    </>
  );
};
export default Crechesmieuxnotees;
