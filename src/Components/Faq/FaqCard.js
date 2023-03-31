export default function FaqCard({ question, answer }) {
    return (
      <div className="keen-slider__slide h-max w-full bg-rawdapurple bg-opacity-30 flex flex-col justify-center items-center pt-6">

<div className="flex flex-col items-center gap md:gap-y-0 ">
        <p className="  text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdablack z-10">  FAQ</p>
      <div className="  mb-[0.5px] mt-[-15px] w-[70px] md:w-[70px] h-[20px]  bg-rawdayellow shadow-rawdayellow "></div></div>


        <div className="bg-transparent h-full mt-5 z-20 relative flex flex-col justify-center items-center md:h-96 h-110 lg:w-2/3 md:w-4/5 sm:w-5/6 w-5/6 p-5 rounded">
          <div className="text-center w-9/12 font-extrabold font-Poppins text-2xl md:text-3xl mb-4 text-rawdawhite">
            {question}
          </div>
          <div className="h-0 w-9/12 border-t-2 border-white"></div>
  
          <p className="text-center font-sans text-rawdawhite w-9/12 md:w-8/12 lg:w-2/3 mt-5 text-lg">
            {answer}
          </p>
        </div>
      </div>
    );
  }