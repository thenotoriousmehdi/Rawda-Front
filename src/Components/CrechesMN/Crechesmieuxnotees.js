import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import arrow from "../../assets/arrowblack.svg";
import CrecheCard from "./CrecheCard";
import { Link } from 'react-router-dom';
const Crechesmieuxnotees = ({creches}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
   const data1  = [
    {
      images: [
        {
          image: '/image1/img1.jpg',
          id: '1'
        },
        {
          image: '/image1/img2.jpg',
          id: '2'
        },
        {
          image: '/image1/img3.jpg',
          id: '3'
        }
      ],
      profilsCommentsdata: [
        {
          image: '/image1/mehdi1.png',
          comment: ' Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          name: 'John Alendon',
          id: '1'
        },
        {
          image: '/image1/mehdi1.png',
          comment: ' Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          name: 'Natasha',
          id: '2'
        },
        {
          image: '/image1/mehdi1.png',
          comment: ' Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          name: 'Alex Hormonzi',
          id: '3'
        },
        {
          image: '/image1/mehdi1.png',
          comment: ' Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          name: 'John Alendon',
          id: '4'
        },
        {
          image: '/image1/mehdi1.png',
          comment: ' Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          name: 'Natasha',
          id: '5'
        },
        {
          image: '/image1/mehdi1.png',
          comment: ' Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          name: 'Alex Hormonzi',
          id: '6'
        }
      ],
      title: 'Crèche berceau des anges',
      locasitiontitle: 'Birkhadem, Alger',
      Type_accueil: 'Régulier',
      Jours_accueil: 'Du dimanche au mardi',
      Type_etablissement: 'Etatique',
      Ages_accueil: '2-5 ans',
      Pedagogie: 'Montessori',
      Langue: 'Francais',
      Capacite_accueil: '2000 enfants',
      Places_disponibles: '20 places',
      Transport: 'Oui',
      Alimentation: 'Non',
      num: '0663212232',
      mail: 'km_mamouni@esi.dz',
      respo: 'Mehdi Ali',
      numid: 1,
      id: 1
    }
      ] ;
   
   
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


         <div ref={sliderRef} className="keen-slider  mb-6">
           
          {data1.map((e, idx) => {
            return (
              <>
             
              <CrecheCard key={idx} creche={e} />
           
             
              </>
            );
          })}


          {loaded && instanceRef.current && (
            <div className="h-full lg:w-2/3 md:w-4/5 sm:w-5/6 w-5/6">
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />


              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="relative flex justify-center py-3 -mt-7 z-20">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={
                    "border-none w-2 h-2 rounded-full p-1 mx-1 cursor-pointer" +
                    (currentSlide === idx
                      ? " bg-rawdapurple "
                      : " bg-rawdapurple bg-opacity-30")
                  }
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Crechesmieuxnotees;


function Arrow(props) {
  const disabeld = props.disabled ? " text-rawdapurple" : "text-rawdapurple";
  return (
    <div
      onClick={props.onClick}
      className={`hidden md:flex flex items-center justify-center absolute   top-1/2 cursor-pointer ${
        props.left ? "left-1/4 -ml-40" : "right-1/4 -mr-40 flex-row-reverse"
      } ${disabeld}`}
    >
      <div
        className={`flex items-center justify-center w-1/3 ${
          props.left ? "-mr-2" : "rotate-180 -ml-2"
        }`}
      >
        <img src={arrow} height={120} width={120} alt="arrow"></img>
      </div>
    </div>
  );
}


