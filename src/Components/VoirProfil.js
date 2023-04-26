
import React, { useState } from "react";
import NavAfter from "./NavAfter";
import mehdi from "../assets/mehdi.jpeg";
import line from "../assets/line.svg";
import line2 from "../assets/line2.svg";
import Footer from "./Footer";

export default function VoirProfil({ photo, nomc, role, email, num, daten, adresse, EI, handleClick}){
    
    return (
        
          <div className="bg-rawdawhite">
        
            <div
              id="profile"
              className="flex justify-items-center md:ml-[180px] md:mx-12 mx-6 mt-20 bg-opacity-10 bg-rawdapurple w-[333px]  md:w-[600px] h-full mb-6 rounded-xl "
            >
              <div className="mx-auto  ">
                <div className="relative flex-col mx-2 my-2  justify-center items-center md:mb-10 mb-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-center gap">
                      <img
                        className="mt-[-40px] md:mt-[-70px] ml-[50px] mr-[50px] h-[70px] w-[70px] md:h-[130px] md:w-[130px] rounded-full z-30 border-2 border-rawdapurple border-opacity-100 "
                        src={photo}
                        alt=""
                      />
                    </div>
    
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-center text-rawdablack text-xl font-medium font-Poppins ">
                        <h1>{nomc}</h1>
                      </div>
    
                      <div className="flex justify-center text-[#475467]  font-light">
                        <h4>{role}</h4>
                      </div>
    
                      <div className="w-[350px]">
                        <img src={line} />
                      </div>
                    </div>
    
                    <div className="mt-4 ml-8 md:ml-0 flex justify-items-stretch gap-4">
                      <img src={line2} />
    
                      <div className=" mx-2 flex flex-col gap-1">
                        <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                          <h4>Email</h4>
                        </div>
                        <div className=" flex justify-start text-[#475467]  font-light">
                          <h4>{email}</h4>
                        </div>
                      </div>
                    </div>
    
                    <div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
                      <img src={line2} />
                      <div className="mt-1 mx-2 flex flex-col gap-1">
                        <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                          <h4>Numéro de téléphone</h4>
                        </div>
                        <div className=" flex justify-start text-[#475467]  font-light">
                          <h4>{num}</h4>
                        </div>
                      </div>
                    </div>
    
                    <div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
                      <img src={line2} />
                      <div className="mt-1 mx-2 flex flex-col gap-1">
                        <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                          <h4>Date de naissance</h4>
                        </div>
                        <div className=" flex justify-start text-[#475467]  font-light">
                          <h4>{daten}</h4>
                        </div>
                      </div>
                    </div>
    
                    <div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
                      <img src={line2} />
                      <div className="mt-1 mx-2 flex flex-col gap-1">
                        <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                          <h4>Adresse</h4>
                        </div>
                        <div className=" flex justify-start text-[#475467]  font-light">
                          <h4>{adresse}</h4>
                        </div>
                      </div>
                    </div>
    
                    <div className="flex ml-8 md:ml-0 justify-items-stretch gap-4">
                      <img src={line2} />
                      <div className="mt-1 mx-2 flex flex-col gap-1">
                        <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                          <h4>Enfants inscris</h4>
                        </div>
                        <div className=" flex justify-start text-[#475467]  font-light">
                          <h4>{EI}</h4>
                        </div>
                      </div>
                    </div>
    
                    <div className="mt-6 flex flex-wrap justify-center">
                      <div className="flex justify-center md:justify-center">
                        <a href="/posturad">
                          <button
                        onClick={handleClick}
                            id="profile"
                            type="button"
                            className="rounded-full font-medium text-lg bg-rawdapurple px-4 py-2 text-white   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                          >
                            Modifier mon profile
                          </button>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            
          </div>
        
      );

}