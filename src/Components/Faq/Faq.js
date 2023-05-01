import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import FaqCard from "./FaqCard";
import arrow from "../../assets/arrowblack.svg";

const Faq = () => {
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
      question: "Est ce que l’utilisation de votre site est gratuite?",
      answer: `Oui, l'utilisation de Rawda est totalement gratuite que ce soit pour les réguliers ou même si vous êtes un nouvel utilisateur.
      Vous pouvez rechercher et consulter des informations sur les 
      différentes crèches sans payer aucun frais.
      `,
    },
    {
      question:
        "Quels sont les critères de recherche disponibles pour trouver une crèche ?",
      answer: `Les critères de recherche disponibles pour trouver une crèche sur notre site comprennent la localisation, 
      les heures d'ouverture, les tarifs, les services proposés, les âges des enfants acceptés et la capacité d'accueil. 
      Vous pouvez également filtrer les résultats en fonction de vos besoins.
      

      `,
    },
    {
      question: "Comment puis-je trouver une crèche proche de chez moi ?",
      answer: `vous pouvez utiliser notre moteur de recherche en entrant le nom de votre ville dans la barre de recherche.
      Les résultats affichent les crèches les plus proches de chez vous, avec des informations sur leur emplacement, 
      leurs horaires d'ouverture, leurs services, capacité d'accueil et leurs tarifs. 

      `,
    },
    {
      question: "Comment puis-je inscrire mon enfant  ?",
      answer:
        " Pour inscrire votre enfant dans une crèche après avoir trouvé celle qui répond à vos besoins en consultant ses informations sur notre site, nous vous invitons à consulter la carte de la crèche où vous trouverez beaucoup plus dinformations, telles que des photos, ainsi que deux boutons Prendre rendez-vous ou Inscrire mon enfant. Vous pouvez donc inscrire votre enfant directement sur le site via un formulaire, bien que nous vous conseillons de visiter la crèche ou de prendreun rendez-vous directement à travers Rawda.",
    },
    {
      question:
        "Comment puis-je laisser un commentaire ou un avis sur une crèche ?",
      answer: `Vous pouvez laisser un commentaire ou un avis sur une crèche en accédant à la carte de la crèche et en cliquant sur le bouton 
      évaluer en bas de page ou vous trouverez des avis d'autres utilisateurs sur la même crèche. Vous serez redirigé vers une page où vous pourrez laisser
      votre avis sur la crèche. Nous vous encourageons à partager votre expérience avec d'autres 
      parents pour les aider à trouver la meilleure crèche pour leurs enfants. Cependant, nous vous demandons de respecter les normes 
      de respect dans vos commentaires et de ne pas utiliser de langage malpoli. 
      

      `,
    },
  ];
  return (
    <>
      <div
        id="faq"
        className="relative flex flex-col w-full h-screen justify-center items-center  mb-12"
      >
        {/*  <SectionTitle title="FAQ" /> */}

        <div ref={sliderRef} className="keen-slider">
          {data.map((e, idx) => {
            return (
              <FaqCard key={idx} question={e.question} answer={e.answer} />
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

export default Faq;

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
