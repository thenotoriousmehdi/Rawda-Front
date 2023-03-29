/* import { CPlaceholder } from '@coreui/react'

3import CPlaceholder from '@coreui/react/src/components/placeholder/CPlaceholder'
export default function CarteCreche(){
return (



<CCard style={{ width: '18rem' }}>
2  <CCardImage orientation="top" src={ReactImg} />
3  <CCardBody>
4    <CCardTitle>Card title</CCardTitle>
5    <CCardText>
6      Some quick example text to build on the card title and make up the bulk of the card's
7      content.
8    </CCardText>
9    <CButton href="#">Go somewhere</CButton>
10  </CCardBody>
11</CCard>
12<CCard style={{ width: '18rem' }}>
13  <CCardImage component="svg" orientation="top" width="100%" height="162" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
14    <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
15  </CCardImage>
16  <CCardBody>
17    <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
18      <CPlaceholder xs={6} />
19    </CPlaceholder>
20    <CPlaceholder component={CCardText} animation="glow">
21      <CPlaceholder xs={7} />
22      <CPlaceholder xs={4} />
23      <CPlaceholder xs={4} />
24      <CPlaceholder xs={6} />
25      <CPlaceholder xs={8} />
26    </CPlaceholder>
27    <CPlaceholder component={CButton} disabled href="#" tabIndex={-1} xs={6}></CPlaceholder>
28  </CCardBody>
29</CCard>
);
}
 */







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