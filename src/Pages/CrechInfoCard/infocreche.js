import Slide_imgs from './Sliderc/slider'


export default function Infocreche ({creche} ){

 
    return( 
     <div className="mx-4 my-7 sm:mx-16 sm:mb-16  bg-rawdapurple bg-opacity-5  px-3  sm:px-10 md:px-24 py-3  pb-8 sm:py-6 block text-left rounded-md">
       
              <Slide_imgs creche={creche}/>  
                <h2 className="font-body    text-lg sm:text-3xl  leading-10 text-gray-800 "> <strong>{creche.title} </strong> </h2>
              <div className='flex ' > 
                <svg  className='sm:w-7 sm:h-8 h-6  py-1  ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
               </svg>
              
                <p className="font-body mt-2  text-xs mb-14  leading-5  text-mygray ">  {creche.locasitiontitle}</p>
              </div> 
               <ul className='font-body list-none  sm:text-lg text-xs  px-1 sm:px-4  leading-9 sm:leading-10 text-rawdablack'>
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
                <li><strong>Description:</strong> {creche.Description} </li>

              </ul>        

</div>
  )

}
