import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import About from "../Components/About";
import deco1 from "../assets/deco1.png";
import Services from "../Components/service/Services.js";
import Faq from "../Components/Faq/Faq.js";
import Avis from "../Components/Aviss/Avis";
import Crechesmieuxnotees from "../Components/CrechesMN/Crechesmieuxnotees";
import Team from "../Components/Team/Team";
import Nav from "../Components/Nav";
function Home({ creches }) {
  /* const [userType, setUserType] = useState() ;

  useEffect(()=> {
    console.log(localStorage.getItem('role'))
    setUserType(localStorage.getItem('role'))
  },[]);

  
  const renderSwitch = (userType) => {
    switch(userType) {
      case "admin":
        return <NavAdmin/>;
        break;
      case "parent":
      return <NavParent/>;
        break;
      case "proprio":
        return <NavProprio/>;
        break;
      default:
        return  <Header/>;
        break;
    }
  }
 */
  /* headerReturn(){
    switch (userType) {
      
    }
  } */
 
  return (
    <>
      <div className="bg-rawdawhite">
      
       <Nav/>
        <Hero />
        <div>
          <img src={deco1} />
        </div>
        <About />
        <Crechesmieuxnotees creches={creches} />
        <Services />
        <div className="hidden sm:block">
          <Team />{" "}
        </div>

        <Avis />
        <Faq />
        <div className="flex flex-wrap justify-center items-center gap-6 m-4">
          <a href="/VoirProfil"> Profil </a>
          <a href="/Notifications">Notifications </a>
          <a href="/AddCreche">Add Creche </a>
          <a href="/Dashboard">Dashboard </a>
          <a href="/creches">infos creche </a>
          <a href="AddAdmin"> Add Admin</a>
        </div>
        <Footer />
      </div>
    </>
  );

}
export default Home;
