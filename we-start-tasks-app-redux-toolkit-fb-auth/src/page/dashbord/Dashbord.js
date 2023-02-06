import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/login/Dashbord/Header";
import NavMenu from "../../components/login/Dashbord/NavMenu";

let Dashbord = () => {
    return (
        <Fragment>
            <Header/>
<div className="container-fluid">
  <div className="row">
    <NavMenu/>
    <Outlet/>
 
  </div>
  
      	</div>


        </Fragment>
    )
}
export default Dashbord;