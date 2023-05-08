
export default function Localisation (){

    return(
       <div className="  m-4 sm:mx-16 sm:my-16 flex  flex-wrap   items-center  justify-evenly bg-rawdapurple bg-opacity-5 rounded-mdb   ">

<div className="flex flex-col  gap  mb-10    pt-10 ">
     <h3 className="font-body  font-bold sm:text-5xl  text-3xl  text-rawdapurple  z-10 ">Localisation</h3>
        <div className="  mb-1  -mt-4  w-46  h-4 bg-yellow-300 shadow-yellow-300 "></div></div>
        {}
        {// add champs "mapgps" qui va contenir la valeur de l attribut  src du iframe de chaque creche 
        }
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.3983667715943!2d3.0943616755032695!3d36.73700797125966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadebc9f02141%3A0x7f88abef121b38b4!2sCr%C3%A8che%20Garden%20School!5e0!3m2!1sfr!2sdz!4v1683541713570!5m2!1sfr!2sdz" 
           width="400" 
           height="300" 
           style={{ border: "0" }} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"
           className="  w-4/5 sm:w-96  mx-6 sm:mx-16 rounded-mdb   my-20 ">  
        </iframe>
      </div>


    )
}
