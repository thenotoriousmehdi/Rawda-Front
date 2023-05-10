import { profilsdata } from "./profilsdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import FormDialog from "./evaluationDialog";
import Rating from "@mui/material/Rating";
import mehdi1 from "../../assets/wassim.PNG";

export default function Avis({ creche }) {
  const eva = creche.avis.evaluations;
  return (
    <div className="m-4 sm:mx-16 sm:my-16 bg-rawdapurple bg-opacity-5 p-5 font-sans  text-center rounded-md ">
      <div className="flex flex-col  gap md:gap-y-0 mb-10 items-center">
        <h3 className=" font-body font-bold text-5xl leading-6  text-rawdapurple  mt-6 text-center commenth3 z-10">
          {" "}
          Avis{" "}
        </h3>
        <div className="   pt-4  w-24 h-4 bg-yellow-300 shadow-yellow-300 "></div>
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={
         {   690: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 30
            }}
          }
          cssMode={true}
          navigation
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className=" p-8 "
        >
          {eva.map((profilcomment) => (
            <SwiperSlide>
              <div className=" border    border-rawdapurple flex relative flex-col  h-4/6 rounded-lg items-center justify-center p-7 gap-4   ">
                <img src={mehdi1} className="w-12 h-12 rounded-full" />
                <span className=" font-body font-semibold text-lg lg:text-xl leading-7 lg:leading-9   ">
                  {profilcomment.nom}{" "}
                </span>
                <Rating name="read-only" value={profilcomment.noteIndiv} readOnly />
                <p className="font-body font-medium text-base  text-black leading-7  text-left pl-3   h-32  w-full  "  style={{overflowWrap : "break-word" , overflow: "auto" }}>
                  {profilcomment.commentaires}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <FormDialog />
      </div>
    </div>
  );
}
