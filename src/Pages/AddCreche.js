import Footer from "../Components/Footer";
import NavAfter from "../Components/NavAfter";
function AddCreche() {
  return (
    <>
      <NavAfter />

      <div className="flex flex-col">
        <h1
          className=" text-4xl my-12 font-bold text-center text-rawdablack justify-center
            md:text-4xl md:center "
        >
          Les informations de ma creche
        </h1>
      </div>

      <div className="mx-8 rounded-xl opacity-30 bg-rawdapurple">
           <div className="mx-6 my-6 gap-4 sm:px-6 lg:px-10 ">
               <div className="container flex-row  w-full h-max justify-center items-center md:mb-10 mb-4">
                   <div className="flex flex-row justify-items-center gap-4">
                         <div className="flex space-x-4">
                              <input
                               type="text"
                               id="Nom de l'etabllissement"
                                 placeholder="Nom de l'etabllissement"
                                required
                                className="rounded-lg border-rawdapurple border  py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdapurple shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                 />
                              </div>

              <div className="flex space-x-4">
                <input
                  type="text"
                  id="Jours d'accueil"
                  placeholder="Jours d'accueil"
                  required
                  className="rounded-lg border-rawdapurple  border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdapurple shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-4">
                <input
                  type="text"
                  id="Jours d'accueil"
                  placeholder="Type d'accueil"
                  required
                  className="rounded-lg border-rawdapurple  border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdapurple shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
             </div>

              <div className="flex space-x-4">
              <input
                type="text"
                id="Jours d'accueil"
                placeholder="Type d'accueil"
                required
                className="rounded-lg border-rawdapurple  border py-2 px-4 mx-4 my-4 text-gray-700 placeholder-rawdapurple shadow-sm text-base focus:outline-violet-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
                 </div>
                 </div>
           </div>
      </div>

      <Footer />
    </>
  );
}

export default AddCreche;
