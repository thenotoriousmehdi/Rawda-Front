


export default function AvisCrd ({ photo, nom, avis })
{
return (

<div className="keen-slider__slide h-max w-max  bg-rawdapurple bg-opacity-[3%]  flex justify-center  p-24 rounded-lg mb-24">
 <div className=" flex jusitify-center w-[300px] h-[300px] md:w-[600px] md:h-[300px] gap-6 border border-dashed border-rawdapurple mx-4 rounded-md">
  
          <div className="flex justify-center gap">

            
           <img
                          className="  h-[70px] w-[70px] md:h-[130px] md:w-[130px] rounded-full z-30 mt-[-80px] ml-[-200px] md:mt-[-70px] md:ml-[-100px] border-2 border-rawdapurple "
                          src={photo}

                          alt=""
                        /> 
                

<div className="flex flex-col justify-center items-center h-full mt-[-50px] mr-[-60px]  relative  md:h-96 h-110 lg:w-2/3 md:w-4/5 sm:w-5/6 w-5/6 p-5 rounded">
         
         
          <div className="text-left w-9/12 font-extrabold font-Poppins text-2xl mb-4 text-rawdapurple">
            {nom}
          </div>
  
  <p className="text-left font-sans font-light text-rawdablack mt-5 text-l">
    {avis}
  </p>

          

          </div>




</div>
</div> 
</div>




);
}
