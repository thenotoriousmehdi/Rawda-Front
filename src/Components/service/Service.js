import React from "react";

export default function Services(props) {
    return(
        <div className="  p-5 w-[350px] h-[400px] border border-rawdapurple border-opacity-60 md:p-8 bg-rawdawhite  xl:w-[400px] md:w-[30%] xl:h-[500px] md:h-[420px] shadow shadow-rawdapurple rounded-[8px] hover:scale-105 duration-200">

<a href="/Login">
        <img src={props.img}></img>
        <h3 className=" text-rawdapurple text-base  md:text-xl md:pt-8 pt-4 text-center  font-Poppins font-bold">{props.title}</h3>
        <p className="font-Poppins text-rawdablack text-opacity-80 text-[12px] font-light md:text- text-center">{props.description}</p>
        </a>
        </div>
          );
    }
