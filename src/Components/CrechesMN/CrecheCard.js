
import mehdi from "../../assets/creche.jpg";
export default function CrecheCard({nom,adresse}){
return(

<div className="keen-slider__slide h-max w-[200px]  bg-rawdapurple bg-opacity-[3%]  flex flex-col justify-center items-center p-8 rounded-xl mb-16">


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












);


}
















