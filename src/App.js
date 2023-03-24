import Header from "./Components/Header";
//import Headerr from "./Components/Headerr.js";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About"; 
/* import FaqCard from "./Components/FaqCard"; */
/* import Faq from "./Components/Faq"; */
//import Login from "./Components/Login"
//import Signup from "./Components/Signup"

function App() {
  return (
    
    <div className="bg-rawdawhite">
  <Header />
  <Hero />
  <About /> 
 {/*  <Faq/> */}
{/*   <FaqCard/> */}
  <Footer/>
      
    </div>
  );
}
export default App;

