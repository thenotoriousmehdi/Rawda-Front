import Footer from "../Components/Footer";
import NavAfter from "../Components/NavAfter";
import arrow from "../assets/arrow.png"
function AddCreche() {
  return (
    <>
      <NavAfter />
 <div className="flex justify-center p-6">
      <h1
          className="bg-rawdayellow p-y-1 text-lg font-Poppins font-bold text-center text-rawdablack 
            md:text-4xl md:center">
          Les informations de ma creche
        </h1>
      
        </div>
 

      

      <div className="mx-8 rounded-lg bg-rawdawhite  ">
           <div className="mx-6 my-6 gap-4 sm:px-6 lg:px-10 ">
               
              <div className="container flex-row  w-full h-max justify-center items-center md:mb-10 mb-4">
              
               




                   <div className="flex flex-row justify-between">
                        
                        
                   <div className="flex space-x-4">
                             <input
                             type="text"
                             id="Nom de l'etablissement"
                              placeholder="Nom de l'etablissement"
                            required
                           className="rounded-lg border-rawdapurple opacity-40 border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>

                             <div className="flex space-x-4">
                             <input
                             type="text"
                             id="Type de l'etablissement"
                              placeholder="Type de l'etablissement"
                            required
                           className="rounded-lg border-rawdapurple opacity-40 border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdablack shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                           />
                           </div>



                     </div>

             


         </div>
       </div>
      </div>

      <Footer />
    </>
  );
}

export default AddCreche;
