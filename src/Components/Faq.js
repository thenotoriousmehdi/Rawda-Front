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
      answer: `Lorem ipsum dolor sit amet. Qui ratione perferendis qui impedit similique est corporis repellat id harum aspernatur. Hic rerum nemo et quae natus aut rerum voluptas. Eos fuga quasi qui mollitia voluptatibus ut incidunt consectetur non dignissimos delectus.

      `,
    },
    {
      question: "Comment puis-je trouver une crèche proche de chez moi ?",
      answer: `Lorem ipsum dolor sit amet. Qui ratione perferendis qui impedit similique est corporis repellat id harum aspernatur. Hic rerum nemo et quae natus aut rerum voluptas. Eos fuga quasi qui mollitia voluptatibus ut incidunt consectetur non dignissimos delectus.

      `,
    },
    {
      question:
        "Comment fonctionne le moteur de recherche de votre site ?",
      answer: `Lorem ipsum dolor sit amet. Qui ratione perferendis qui impedit similique est corporis repellat id harum aspernatur. Hic rerum nemo et quae natus aut rerum voluptas. Eos fuga quasi qui mollitia voluptatibus ut incidunt consectetur non dignissimos delectus.

      `,
    },
    {
      question: "Quels sont les critères de recherche disponibles pour trouver une crèche ?",
      answer: "Lorem ipsum dolor sit amet. Qui ratione perferendis qui impedit similique est corporis repellat id harum aspernatur. Hic rerum nemo et quae natus aut rerum voluptas. Eos fuga quasi qui mollitia voluptatibus ut incidunt consectetur non dignissimos delectus ",
    },
    {
      question: "Comment puis-je réserver une place dans une crèche ?",
      answer: `Lorem ipsum dolor sit amet. Qui ratione perferendis qui impedit similique est corporis repellat id harum aspernatur. Hic rerum nemo et quae natus aut rerum voluptas. Eos fuga quasi qui mollitia voluptatibus ut incidunt consectetur non dignissimos delectus.

      `,
    },
  ];
  return (
    <>
      <div
        id="faq"
        className="relative flex flex-col w-full h-screen justify-center items-center bg-Gray-800"
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
              /> */}

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
                    (currentSlide === idx ? " bg-rawdapurple " : " bg-rawdapurple bg-opacity-30")
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
        <img
          src={arrow}
          height={120}
          width={120}
          alt="arrow"
        ></img>
      </div>
    </div>
  );
} 
