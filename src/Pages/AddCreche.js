import Footer from "../Components/Footer";
import NavAfter from "../Components/NavAfter";

import arrow from "../assets/arrow.png"
import { useForm } from "react-hook-form";

function AddCreche() {
  return (
    <>
    
      <NavAfter />

     
 

      

      <div className="mx-8 rounded-lg bg-rawdawhite  ">
           <div className="mx-6 my-6 gap-4 sm:px-6 lg:px-10 ">
               
              <div className="container flex-row  w-full h-max justify-center items-center md:mb-10 mb-4">
              
              <div className="flex justify-start p-4">
      <p
          className=" text-left text-sm font-Poppins font-bold text-rawdapurple mt-4
            md:text-xl ">
          Les informations de ma creche
        </p>
        </div>

        <div className="w-full h-fit flex flex-col items-center justify-center gap-y-[50px]">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-[15px] md:gap-x-[20px]">


                  {/*  <div className="flex flex-row flex-wrap justify-between"> */}
                        
                        
                          <div >
                             <input
                             type="text"
                             id="Nom de l'etablissement"
                              placeholder="Nom de l'etablissement"
                            required
                           className="rounded-lg w-[250px] h-[50px] md:w-[400px] border-rawdapurple opacity-40 border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-rawdawhite focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>

                             <div className="flex space-x-4">
                             <input
                              type="text"
                              id="Type de l'etablissement"
                              placeholder="Type de l'etablissement"
                              required
                              className="rounded-lg w-[250px] h-[50px] md:w-[300px] border-rawdapurple opacity-40 border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>

                           

                           </div>
                           
                           </div>
                           </div>


                   {/*   </div> */}

             


         </div>
       </div>

     
      <Footer />
  
    </>
  );
}

export default AddCreche;
