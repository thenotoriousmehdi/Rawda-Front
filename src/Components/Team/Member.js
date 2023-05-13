import React from "react";

export default function Member(props) {
    return (
        <div className=" w-[300px]  h-[380px] md:h-[500px] bg-rawdawhite  rounded-[3px] flex flex-col  items-center border-2 border-rawdapurple">
       <div className="h-[125px] w-[125px] md:h-[160px] md:w-[160px] rounded-[50%] md:mt-[60px] mt-[30px] bg-white flex flex-row justify-center items-center border-[3.5px] md:border-[4px] border-l-rawdapurple border-b-rawdapurple border-r-rawdawhite border-t-rawdawhite">
        <div className=" h-[110px] w-[110px] md:h-[140px] md:w-[140px] rounded-[50%]">
            <img src={props.img} className="w-[100%] h-[100%] rounded-[50%] object-cover"></img>
        </div>
       </div>

        <p className="md:text-2xl text-rawdapurple mt-[20px] md:mt-[35px] font-medium text-center text-xl ">{props.name}</p>
        <p className=" text-lg text-center text-rawdablack mx-5 mt-[15px] md:mt-[20px] md:text-xl">{props.description}</p>

          <div className=" flex flex-row  w-full md:h-[60px] justify-evenly items-center mt-[20px] md:mt-[40px]">
            <a href="facebook.com"><div className=" w-[30px] h-[30px] md:w-[35px] md:h-[35px]">
                
            <svg
                className="w-[100%] h-[100%] object-cover"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
                
                 
                </div></a>
            <a href="linkedin.com"><div className=" w-[30px] h-[30px] md:w-[35px] md:h-[35px]">
               
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>




                </div>
                
                
                
                
                </a>
            <a href="github.com"><div className=" w-[30px] h-[30px] md:w-[35px] md:h-[35px]">
            <svg
                className="w-[100%] h-[100%] object-cover"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
                
              </svg>
                
                
                
                </div></a>

          </div>
</div>


    );}