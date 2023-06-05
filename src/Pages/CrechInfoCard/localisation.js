import { useState } from "react"

export default function Localisation ({ creche }){
// garden , berrceau des anges , Amanycreche

    const lokamap=[
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.3983667715943!2d3.0943616755032695!3d36.73700797125966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadebc9f02141%3A0x7f88abef121b38b4!2sCr%C3%A8che%20Garden%20School!5e0!3m2!1sfr!2sdz!4v1683541713570!5m2!1sfr!2sdz" 
 ,  
 "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12794.402789127436!2d3.0596283!3d36.7081321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad5022d5fe57%3A0xfe1517e22f65261c!2scr%C3%A8che%20berceau%20des%20anges!5e0!3m2!1sfr!2sdz!4v1685960296156!5m2!1sfr!2sdz" 
,
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12791.87424164681!2d3.0587499!3d36.7233163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad9f7842a275%3A0x27d03c358d447201!2sAMANY%20cr%C3%A8che!5e0!3m2!1sfr!2sdz!4v1685981545253!5m2!1sfr!2sdz"
, 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d102336.21243280078!2d3.9777986!3d36.7224018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dc761eba2061b%3A0x8bb1e2f89dd13ff5!2s%C3%89cole%20maternelle%20lila!5e0!3m2!1sfr!2sdz!4v1685982123619!5m2!1sfr!2sdz"
, 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13541.202353384924!2d5.3335348!3d31.9527411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125d6bffa1b5009f%3A0x308630033ee1f04f!2sCr%C3%A8che%20Hamama%20Ouargla!5e0!3m2!1sfr!2sdz!4v1685981977138!5m2!1sfr!2sdz"
, 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12788.88527715042!2d3.0396402!3d36.7412584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad01886d351d%3A0xd0390ecd176ecb14!2sCr%C3%A8che%20Bon%20Papa!5e0!3m2!1sfr!2sdz!4v1685981988143!5m2!1sfr!2sdz" 
, 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12848.546328142837!2d3.8886875!3d36.3816875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128c2ff2441ada9d%3A0x8ae2976abe54f117!2sMARIA%20CRECHE!5e0!3m2!1sfr!2sdz!4v1685982002574!5m2!1sfr!2sdz" 
, 
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.8585289673456!2d3.0372592747070426!3d36.67790237458581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad8668ed546d%3A0x1405c7e6b7404bfb!2sCr%C3%A8che%20LePetitCalin!5e0!3m2!1sfr!2sdz!4v1685984394549!5m2!1sfr!2sdz"
, 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12787.67788116086!2d5.0705203!3d36.748504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f2cdaa2f640aa3%3A0x123a6b76d4037260!2sCr%C3%A8che%20Mes%20Belles%20Journ%C3%A9es!5e0!3m2!1sfr!2sdz!4v1685982043605!5m2!1sfr!2sdz" 
,
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102446.71717469052!2d2.6173867433593774!3d36.639385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f9fd3b17c626b%3A0x2e0c0076f31928d3!2z2KfZhNit2K_ZitmC2Kkg2KfZhNiz2KfYrdix2Kk!5e0!3m2!1sfr!2sdz!4v1685984567600!5m2!1sfr!2sdz"
, 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12952.869902499055!2d-5.8560791!3d35.7454591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b87c31f41e58d%3A0x9d625718d421346a!2sL&#39;univers%20des%20mignons!5e0!3m2!1sfr!2sdz!4v1685982076419!5m2!1sfr!2sdz" 
, 
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12787.149106113175!2d3.0588123!3d36.7516768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3c9685a2215%3A0xd3e07d318693b7ba!2sCh%C3%A2teau%20des%20anges!5e0!3m2!1sfr!2sdz!4v1685982109268!5m2!1sfr!2sdz"
]
    return(
       <div className="  m-4 sm:mx-16 sm:my-16 flex  flex-wrap   items-center  justify-evenly bg-rawdapurple bg-opacity-5 rounded-mdb   ">

<div className="flex flex-col  gap  mb-10    pt-10 ">
     <h3 className="font-body  font-bold sm:text-5xl  text-3xl  text-rawdapurple  z-10 ">Localisation</h3>
        <div className="  mb-1  -mt-4  w-46  h-4 bg-yellow-300 shadow-yellow-300 "></div></div>
        {}
        {// add champs "mapgps" qui va contenir la valeur de l attribut  src du iframe de chaque creche 
        } 
    
        <iframe src={creche.nom ==="creche garden school" ? lokamap[0]:
        creche.nom ==="Crèche berceau des anges" ? lokamap[1] : 
        creche.nom==="Amanycreche" ?  lokamap[2] : 
        creche.nom==="ecole maternelle lila" ?   lokamap[3] : 
        creche.nom==="creche hammama oueargla" ?   lokamap[4] : 
        creche.nom==="Bon papa" ?  lokamap[5] : 
        creche.nom==="Bouira Creche MARIA"  ? lokamap[6] : 
        creche.nom==="calins des petits"  ? lokamap[7] : 
        creche.nom==="creche mes belles journées"  ? lokamap[8] : 
        creche.nom==="elhadika esahira"  ? lokamap[9] : 
        creche.nom==="l'Univers des Mignons"?   lokamap[10] :
        creche.nom==="Chateau des anges"?   lokamap[11] :
        lokamap[2]

      
      }
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
