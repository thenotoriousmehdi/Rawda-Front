
import mehdi from "../assets/mehdi.jpeg";
export default function CrecheCard({nom,adresse}){
return(

<div className="keen-slider__slide h-max md:w-[400px] bg-rawdapurple bg-opacity-5 flex flex-col justify-center items-center p-6 rounded-md">


  <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow m-6">
  <a href="#">
      <img className="rounded-t-lg" src={mehdi} alt="" />
  </a>
  <div className="p-5">
      <a href="#">
          <h5 className="mb-2 text-xl font-Poppins font-semibold tracking-tight text-rawdablack ">{nom}</h5>
      </a>
      <p className="mb-3 font-Poppinsregular  text-[#475467]"> {adresse} </p>
      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rawdapurple rounded-lg hover:bg-rawdapurple hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Details
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
  </div>
</div>
</div>


/* <div className="keen-slider__slide h-max w-full bg-rawdapurple bg-opacity-30 flex flex-col justify-center items-center pt-6">

<div className="flex flex-col items-center gap md:gap-y-0 ">
        <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10">  FAQ</p>
      <div className="  mb-[0.5px] mt-[-15px] w-[70px] md:w-[70px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div></div>


        <div className="bg-transparent h-full mt-5 z-20 relative flex flex-col justify-center items-center md:h-96 h-110 lg:w-2/3 md:w-4/5 sm:w-5/6 w-5/6 p-5 rounded">
          <div className="text-center w-9/12 font-extrabold font-Poppins text-2xl md:text-3xl mb-4 text-rawdawhite">
            {question}
          </div>
          <div className="h-0 w-9/12 border-t-2 border-white"></div>
  
          <p className="text-center font-sans text-rawdawhite w-9/12 md:w-8/12 lg:w-2/3 mt-5 text-lg">
            {answer}
          </p>
        </div>
      </div> */









);


}


















/* import React, { useState } from "react";
import { Badge } from "reactstrap";
const CarteCreche = (props) => {
  const [badgeColor, setBadgeColor] = useState("white");
  const [badgebgColor, setBadgebgColor] = useState("white");

  React.useEffect(() => {
    colorTheme();
  });

  const colorTheme = () => {
    switch (props.categorie) {
      case "prive": {
        setBadgeColor("#03543F");
        setBadgebgColor("#DEF7EC");
        break;
      }
      case "regulier": {
        setBadgeColor("#723B13");
        setBadgebgColor("#FDF6B2");
        break;
      }
      case "montessori": {
        setBadgeColor("#1E429F");
        setBadgebgColor("#E1EFFE");
        break;
      }
      case "freinet": {
        setBadgeColor("#5521B5");
        setBadgebgColor("#EDEBFE");
        break;
      }
      default:
        setBadgeColor("white");
        setBadgebgColor("white");
    }
  };

  return (
    <div class="m-auto overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 w-80 md:w-80">
      <a href="/ad" class="block w-full h-full">
        <img
          alt="estate image"
          src={props.image}
          class="object-cover w-full max-h-40"
        />

        <div class="w-full p-4 bg-white dark:bg-gray-800">
          <Badge
            className=" p-1 px-2 rounded-xl "
            style={{ backgroundColor: badgebgColor, color: badgeColor }}
          >
            {props.categorie}
          </Badge>

          <p class="mb-2 text-md font-medium text-gray-800  ">{props.title}</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class=" w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p class="font-thin text-gray-400 text-md truncate ">
              {props.location}
            </p>
          </div>
          <p class="font-medium text-violet-700 text-md pt-1 ">{props.price}</p>
        </div>
      </a>
    </div>
  );
};

export default CarteCreche; */
