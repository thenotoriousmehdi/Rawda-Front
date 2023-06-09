import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import AvisCard from "./AvisCard";
import arrow from "../../assets/arrow1.svg";
import jhon from "../../assets/jhon.jpg";
import tarantino from "../../assets/tarantino.jpg";
import linus from "../../assets/linus.jpeg";
import nekfeu from "../../assets/nekfeu.jpg";


const Avis = () => {
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
  const data = [
    {
      photo: jhon,
      nom: "John Doe",
      avis: `Je suis tellement reconnaissant d'avoir découvert Rawda ! Grâce à ce site web,
      j'ai pu trouver la crèche parfaite pour mon enfant.
       Je recommande vivement Rawda à tous les parents qui cherchent une crèche de qualité en Algérie.`,
    },
    {
      photo: nekfeu,
      nom: "Ken Samaras",
      avis: `Maman cherchait ya quelques temps une crèche pour mon frère qui travaille le samedi je lui ai proposé de me 
      laisser le faire à travers rawda et franchement je ne regrette pas, j’ai inscrit mon frère dans la crèche en moins
       de 10 minute le seul bemole était le temps d’attente pour recevoir une réponse de la part de la crèche `,
    },
    {
      photo: tarantino,
      nom: "Quentin Tarantino",
      avis: `Rawda est super ! J'ai pu trouver toutes les informations dont j'avais besoin sur les différentes 
      crèches disponibles en Algérie, et j'ai même pu lire les avis d'autres parents pour me faire une idée plus précise
      `,
    },
    {
      photo: linus,
      nom: "Linus Torvalds",
      avis: "je suis impressionné par la qualité de service, j’ai cliqué sur le bouton a gauche de la barre de recherche et une multitude de critère sont affiche devant moi ca m’a pris 1 minute pour sélectionner les critère qui répondent à mes besoins et puis les crèches correspondant étaient affichées, j’ai pu trouver une crèche pour mon fils et même réserver une place ",
    },
    
  ];
  return (
    <>
      <div
        id="Avis"
        className="relative flex flex-col w-full h-screen justify-center items-center bg-Gray-800 sm:mt-[-150px] "
      >
        <div className="flex flex-col items-center gap md:gap-y-0 mb-8 ">
          <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10 ">
            {" "}
            Ce que disent les parents sur nous{" "}
          </p>
          <div className="  mb-[0.5px] mt-[-15px] w-[120px] md:w-[580px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {data.map((e, idx) => {
            return (
              <AvisCard key={idx} photo={e.photo} nom={e.nom} avis={e.avis} />
            );
          })}

          {loaded && instanceRef.current && (
            <div className="h-full  md:w-2/3 sm:w-5/6 w-5/6">
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
          <div className="relative flex justify-center py-2 -mt-7 z-20">
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
                    "border-none w-2 h-2  rounded-full p-1 mx-1 cursor-pointer" +
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

export default Avis;

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
