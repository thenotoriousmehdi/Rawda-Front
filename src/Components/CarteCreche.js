import React, { useState } from "react";
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

export default CarteCreche;
