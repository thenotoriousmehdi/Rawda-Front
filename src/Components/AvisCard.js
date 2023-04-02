


export default function AvisCrd ({ photo, nom, avis })
{
return (

<div className="keen-slider__slide h-max w-max  bg-rawdapurple bg-opacity-[3%]  flex flex-col justify-center items-center p-24 rounded-lg">
 <div className=" flex flex-col jusitify-center items-center  w-[600px] h-[300px] gap-6 border border-dashed border-rawdapurple mx-4 rounded-md">
  
          <div className="flex flex-col justify-center gap">

           {/*  <div className=" h-[150px] w-[150px] rounded-full  mt-[-51px] ml-[-51px] border-2 border-dashed border-rawdayellow"> */} 
          <img
                          className="h-[130px] w-[130px] rounded-full z-30 mt-[-50px] ml-[-50px] border-2 border-rawdapurple "
                          src={photo}

                          alt=""
                        />
                      {/*   </div> */}

<div className="bg-transparent h-full mt-[-120px] mr-[-100px] z-[-20px] relative flex flex-col justify-center items-center md:h-96 h-110 lg:w-2/3 md:w-4/5 sm:w-5/6 w-5/6 p-5 rounded">
         
         
          <div className="text-left w-9/12 font-extrabold font-Poppins text-2xl mb-4 text-rawdapurple">
            {nom}
          </div>
  
  <p className="text-left font-sans font-light text-rawdablack mt-5 text-xl">
    {avis}
  </p>

          

          </div>




</div>
</div> 
</div>








 /* <div id="about" className="mx-8  bg-opacity-30 bg-rawdapurple  ">
       <div className="mx-auto  sm:px-6 lg:px-10 ">
        <div className="relative flex-col mx-2 my-2 w-full h-max justify-center items-center md:mb-10 mb-4"> 
      <div className="container flex flex-wrap p-8  md:flex-row 
        items-center justify-between px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col gap-8">




          </div>
          </div>
          </div>
          </div>
          </div> 
 */
        /*  <div className="keen-slider__slide h-max w-full bg-rawdapurple bg-opacity-30 flex flex-col justify-center items-center pt-6">

<div className="flex flex-col items-center gap md:gap-y-0 ">
        <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10"> Ce que disent les parents sur nous</p>
      <div className="  mb-[0.5px] mt-[-15px] w-[70px] md:w-[570px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div></div>


        <div className="bg-transparent h-full mt-5 z-20 relative flex flex-col justify-center items-center md:h-96 h-110 lg:w-2/3 md:w-4/5 sm:w-5/6 w-5/6 p-5 rounded">
          <div className="text-center w-9/12 font-extrabold font-Poppins text-2xl md:text-3xl mb-4 text-rawdawhite">
            {nom}
          </div>
          <div className="h-0 w-9/12 border-t-2 border-white"></div>
  
          <p className="text-center font-sans text-rawdawhite w-9/12 md:w-8/12 lg:w-2/3 mt-5 text-lg">
            {avis}
          </p>
        </div>
      </div>  
 */
 

);
}
