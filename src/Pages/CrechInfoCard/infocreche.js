import Slide_imgs from './Sliderc/slider'


export default function Infocreche ({creche} ){

 
    return( 
     <div className="mx-16 my-16 bg-mehdi  p-24 block text-left rounded-md">
       
              <Slide_imgs />  
                <h2 className="font-body  text-4xl  leading-10 text-gray-800 "> <strong>{creche.title} </strong> </h2>
              <div className='flex ' > 
                <svg  className='w-7 h-8 mx-2 py-2 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
               </svg>
              
                <p className="font-body mt-2  text-sm  mb-14  leading-5  text-mygray ">  {creche.locasitiontitle}</p>
              </div> 
               <ul className='font-body list-none  text-xl leading-10 text-rawdablack'>
                <li><strong>Type d'accueil:</strong> { creche.Type_accueil }</li>
                <li><strong>Jours d'accueil:</strong> {creche.Jours_accueil}</li>
                <li><strong>Type d'établissement:</strong> {creche.Type_etablissement}</li>
                <li><strong>Ages d'accueil:</strong> {creche.Ages_accueil}</li>
                <li><strong>Pédagogie:</strong> {creche.Pedagogie}</li>
                <li><strong>Langue:</strong> {creche.Langue}</li>
                <li><strong>Capacité d'accueil:</strong> {creche.Capacite_accueil}</li>
                <li><strong>Places disponibles:</strong> {creche.Places_disponibles}</li>
                <li><strong>Transport:</strong> {creche.Transport} </li>
                <li><strong>Alimentation:</strong> {creche.Alimentation} </li>
              </ul>        

</div>
  )

}