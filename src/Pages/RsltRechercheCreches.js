import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import CrechesCardS from "../Components/CrechesCardS";
import { useLocation } from "react-router-dom";

function RsltRechercheCreches({ creches }) {
  const location = useLocation();
  const [crechesSearch, setCrechesSearch] = useState(creches);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(18);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  useEffect(() => {
    console.log(location.state.data.data.creche);
    setCrechesSearch(location.state.data.data.creche);
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col  gap  m-10    w-full bg-white mt-0  pt-3  fixed z-30  ">
        <h3 className="font-body  font-bold sm:text-4xl  text-2xl  text-rawdapurple  z-10 ">
          Résultats de recherche
        </h3>
        <div className="  mb-3  -mt-4  w-[280px]  sm:w-[410px]  h-4 bg-yellow-300 shadow-yellow-300 "></div>
      </div>
      <CrechesCardS
        creches={crechesSearch.slice(firstPostIndex, lastPostIndex)}
      />
      <Pagination
        totalPosts={crechesSearch.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}
export default RsltRechercheCreches;
