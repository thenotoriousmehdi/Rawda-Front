
import { profilsdata } from "../dataa/profilsdata";
import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function Avis (){
  

return(

      <div className="mx-16  my-16 bg-mehdi p-5 font-sans  text-center rounded-md ">
         
         <div className="flex flex-col  gap md:gap-y-0 mb-10 items-center">
          <h3  className=" font-body font-bold text-5xl leading-6  text-rawdapurple  mt-6 text-center commenth3 z-10"> Avis </h3>
          <div className="   pt-4  w-24 h-4 bg-yellow-300 shadow-yellow-300 "></div></div>
          <div className="w-full" >

            
           <Swiper  slidesPerView={3} 
                    spaceBetween={30}
                    cssMode={true}
                    navigation
                    pagination={ {clickable:true}}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className=" p-8 "  >
             { 
             profilsdata.map(( profilcomment  ) =>(
              <SwiperSlide   >
                 <div className=" border  border-rawdapurple flex relative flex-col  h-4/6 rounded-lg items-center justify-center p-7 gap-4   " >
                   <img src={profilcomment.img }  className=" absolute  w-12  -top-6  left-2/4   z-10" />
                   <span className=" font-body font-semibold text-lg lg:text-xl leading-7 lg:leading-9   "
                   
                     >{profilcomment.name} </span>
                   <p className="font-body font-medium text-base lg:text-lg text-black leading-7  text-left pl-3 " >{ profilcomment.comment}</p>
                   
                </div>
              </SwiperSlide>) )  }
           </Swiper> 
                                  

           </div>
       <button className="border  border-rawdapurple rounded-lg font-body w-40  h-14   mt-14 font-medium text-2xl text-black" >Evaluer</button>
      </div>
)
}
