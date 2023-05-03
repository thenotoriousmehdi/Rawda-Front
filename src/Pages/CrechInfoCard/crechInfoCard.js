import Infocreche from './infocreche'
import Localisation from './localisation'
import Footer from '../../Components/Footer'  
import Avis from './avis'
import ContactSection from './contactSection'
import Header from '../../Components/Header'
import useFetch from "./useFetch"
import { useParams } from 'react-router'

export default function CrechInfoCard (){
       const { id } = useParams();
     const { data: creche, error, isPending } = useFetch('http://localhost:8002/creches/' + id); 
   
    return(

            <div> 
           <Header />
       { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { creche && 
        (  
        <div className="App">
      
          <Infocreche creche={creche} />
          <Localisation /> 
          <Avis />
          <ContactSection creche={creche}/>
          <Footer /> 
       </div>
         )}    
           
    </div>

    )}