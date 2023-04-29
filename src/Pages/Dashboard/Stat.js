
import arrow from "../../assets/arroww.svg";
export const Stat = ({ line, titre, number, pourcentage }) => {
  return (
    <div className="bg-rawdawhite items center md:ml-[100px] mt-[30px] h-[150px] w-[360px]  rounded-xl">
      <div className="flex flex-col gap-4">
        <div className="flex ml-8 mt-6 gap-8">
          <img src={line} />
          <div className="flex flex-col gap-2">
            <h1 className="text-rawdablack text-xl font-medium">
              {titre}
            </h1>
            <h2 className="text-rawdablack text-3xl font-bold">{number}</h2>
          </div>
        </div>
<div className="flex ml-10 gap-4">
<img src={arrow}/>

<div className="flex gap-1">
<h3 className="text-md  text-[#159B5B] ">
  +{pourcentage}%  
</h3>
<h3 className="text-md text-black text-opacity-40">
depuis la semaine passée
</h3>


</div>




</div>




      </div>
    </div>
  );
};
