import React, { useState, useEffect } from "react";
import NavAfter from "../../Components/NavAfter";
import mehdi from "../../assets/mehdi.jpeg";
import line from "../../assets/line.svg";
import line2 from "../../assets/line2.svg";
import Footer from "../../Components/Footer";
import Accordion2 from "./Accordion2";
import axios from "axios";
import anonymePhoto from "../../assets/ano.jpg";
import Nav from "../../Components/Nav";
export default function VoirProfil() {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/profile",
          config
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-rawdawhite">
      <Nav  />
      <div className="flex items-center justify-center">
        <div
          id="profile"
          className="flex items-center justify-items-center justify-center  md:mx-12 mx-6 mt-20 bg-opacity-10 bg-rawdapurple w-[333px]  md:w-[600px] h-full mb-6 rounded-xl "
        >
          <div key={data._id}>
            <div className="mx-auto flex justify-center items-center  ">
              <div className="relative flex-col mx-2 my-2 justify-items-center justify-center items-center md:mb-10 mb-4">
                <div className="flex flex-col items-center justify-items-center justify-center gap-4">
                  <div className="flex justify-center items-center gap">
                    <img
                      className="mt-[-40px] md:mt-[-70px] ml-[50px] mr-[50px] h-[70px] w-[70px] md:h-[130px] md:w-[130px] rounded-full z-30 border-2 border-rawdapurple border-opacity-100 "
                      src={data.photo !== "" ? `http://localhost:8000/${data.photo}` : anonymePhoto}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-center text-rawdablack text-xl font-medium font-Poppins ">
                      <h1>{data.nomc}</h1>
                    </div>

                    <div className="flex justify-center text-[#475467]  font-light">
                      <h4>{data.role}</h4>
                    </div>

                    <div className=" ml-12 sm:ml-6 sm:w-[350px] w-[250px]">
                      <img src={line} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="mt-4 ml-8 md:ml-0 flex justify-items-stretch gap-4">
                      <img src={line2} />
                      <div className=" mx-2 flex flex-col gap-1">
                        <div className=" flex justify-start text-[#475467] text-opacity-70 font-light">
                          <h4>Email</h4>
                        </div>
                        <div className=" flex justify-start text-[#475467]  font-light">
                          <h4>{data.email}</h4>
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
                          <h4>{data.phone}</h4>
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
                          <h4>{data.daten}</h4>
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
                          <h4>{data.adress}</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Accordion2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
