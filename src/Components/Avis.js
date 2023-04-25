
import { profilsdata } from "../dataa/profilsdata";
import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import FormDialog from "./evaluationDialog";

export default function Avis (){
  

return(

      <div className="mx-4 my-8 sm:mx-16 sm:my-16 bg-rawdapurple bg-opacity-5 p-5 font-sans  text-center rounded-md ">
         
         <div className="flex flex-col  gap md:gap-y-0 mb-10 items-center">

                 
          <h3  className=" font-body font-bold text-5xl leading-6  text-rawdapurple  mt-6 text-center commenth3 z-10"> Avis </h3>
          <div className="   pt-4  w-24 h-4 bg-yellow-300 shadow-yellow-300 "></div></div>
          <div className="w-full" >

           <Swiper  
           
           breakpoints={{
            0:{
               slidesPerView:1 ,  
                    spaceBetween:10 ,
            }, 
            768:{ slidesPerView:2, 
            spaceBetween:10 , 
          } , 
          1023:{
            slidesPerView:3, 
            spaceBetween:10 , 
          }

           }}
          
                    cssMode={true}
                    navigation
                    pagination={ {clickable:true}}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  >
                  
            
          
             { 
             profilsdata.map(( profilcomment  ) =>(
              <SwiperSlide    >
                 <div className=" border  border-rawdapurple flex relative flex-col  h-4/6 rounded-lg items-center justify-center p-7 gap-4   " >
                   <img src={profilcomment.image}  className="   h-12  w-12    z-10" />
                   <span className=" font-body font-semibold text-sm sm:text-xl leading-7 lg:leading-9   "
                   
                     >{profilcomment.name} </span>
                   <p className="font-body font-medium text-sm sm:text-lg text-black leading-7  text-left pl-3 " >{ profilcomment.comment}</p>
                   
                </div>
              </SwiperSlide>) )  }
            
           
           </Swiper> 
      
        
           <FormDialog/>
           </div>
      </div>
)
}  
