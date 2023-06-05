import NavAdmin from "./NavAdmin";
import NavParent from "./NavParent";
import NavProprio from "./NavProprio";
import Header from "./Header";
import { useEffect, useState } from "react";

function Nav({ creches }) {
const [userType, setUserType] = useState() ;

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

return(
    renderSwitch(userType)
);


}
export default Nav;