import Infocreche from './infocreche'
import Localisation from './localisation'
import Footer from '../../Components/Footer'  
import Avis from './avis'
import ContactSection from './contactSection'
import Header from '../../Components/Header'
import useFetch from "./useFetch"
export default function CrechInfoCard (){
     
     const { data: creche, error, isPending } = useFetch('http://localhost:8000/creches/' + 1); 
    
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