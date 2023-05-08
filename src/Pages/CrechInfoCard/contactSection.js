import CustomizedDialogs from "./inscriptionDialog";
import CustomizedDialogsRdv from "./rendezvousDialog";

//import fileDownload from 'js-file-download'
 


/*import axios from 'axios'
import fileDownload from 'js-file-download'
 .

handleDownload = (url, filename) => {
  axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, filename)
  })
}

<button onClick={() => {this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg')
}}>Download Image</button>
}*/

export default function ContactSection({ creche }) {

const role ="user" ; 
 
  return (
    <div className="mx-4 my-8 sm:mx-16 sm:my-16 p-5  rounded-md  bg-rawdapurple  bg-opacity-5">
      <div className="flex flex-col mb-10  items-center justify-center">
        <h3 className=" font-body font-bold sm:text-4xl  text-3xl text-rawdapurple  z-10 ">
          {" "}
          Contacts{" "}
        </h3>
        <div className="  mb-1  -mt-4  w-36  sm:w-40 h-4 bg-yellow-300  shadow-yellow-300 "></div>
      </div>


      <div className=" flex flex-wrap      justify-center    ">
        <div className="inline-flex items-center  w-64 sm:mx-20 m-1 sm:m-6 mb-9 sm:border-r-2 ">
          <svg
            className="w-6 h-6  mr-1 sm:mr-3 text-rawdapurple "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <span className=" font-sans font-light  text-lg sm:text-xl leading-7 pl-3">
            {creche.num}{" "}
          </span>
        </div>


        <div className="inline-flex items-center  w-64 sm:ml-10 m-1 sm:m-6  sm:mb-9  mb-3   ">
          <svg
            className="w-6 h-6 mr-1 sm:mr-3 text-rawdapurple "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <span className=" font-sans font-light  text-lg sm:text-xl leading-7 pl-3">
            {" "}
            {creche.mail}
          </span>
        </div>
      </div>


      <div className=" flex flex-wrap   justify-center    ">
        <div className="inline-flex items-center w-64 sm:border-r-2 sm:mx-20 m-1 sm:m-6 mt-9">
          <svg
            className="w-6 h-6  mr-1 sm:mr-3 text-rawdapurple "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span className=" font-sans font-light text-lg sm:text-xl leading-7 pl-3">
            {creche.prop}
          </span>
        </div>
        <div className="inline-flex items-center  w-64 sm:ml-10 m-1 sm:m-6 mt-9 ">
          <svg
            className="w-6 h-6  mr-1 sm:mr-3 text-rawdapurple"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
          <span className=" font-sans font-light  text-lg sm:text-xl leading-7 pl-3">
            {" "}
            {creche.localisation}{" "}
          </span>
        </div>
      </div>

 <div className="  flex  flex-wrap  items-center justify-around mt-24 ">
      
       <CustomizedDialogs/>
           <CustomizedDialogsRdv/> 
    
  



          </div>  
         
  </div>  
)
  
}



