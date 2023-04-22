import NavAfter from "../Components/NavAfter";
import bg from "../assets/bgprofile.png"
import elipse from "../assets/Ellipsep.svg"
import mehdi from "../assets/mehdi.jpeg"
function Profile () {
return(

   

    <><NavAfter /><div id="profile" className="flex justify-items-center md:ml-[180px] md:mx-24 mx-6 mt-16 bg-opacity-10 bg-rawdapurple w-[333px]  md:w-[600px] h-[400px] mb-6 rounded-xl ">
        <div className="mx-auto  sm:px-6 lg:px-10 ">
            <div className="relative flex-col mx-2 my-2  justify-center items-center md:mb-10 mb-4">

                <div className="flex flex-col gap-8">


                    <div className="flex justify-center gap">
                        <img
                            className="mt-[-40px] md:mt-[-60px] ml-[50px] mr-[50px] h-[70px] w-[70px] md:h-[130px] md:w-[130px] rounded-full z-30 border-2 border-rawdapurple border-opacity-50 "
                            src={mehdi}

                            alt="" />
                    </div>



                </div>
            </div>
        </div>
    </div></>










    
    
    
    
        
        
        


);
}
export default Profile;
