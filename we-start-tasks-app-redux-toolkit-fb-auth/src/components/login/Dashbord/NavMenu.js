import { NavLink } from "react-router-dom";

let NavMenu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className={(props)=>props.isActive ? "nav-link active": "nav-link"}
             aria-current="page" to="/dashbord" end>
              <span data-feather="home"></span>
              Tasks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={(props)=>props.isActive ? "nav-link active ": "nav-link"} to="/dashbord/addNewTask">
              <span data-feather="file"></span>
              Add New Task 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={(props)=>props.isActive ? "nav-link active ": "nav-link"} to="/dashbord/category" end>
              <span data-feather="file"></span>
              Category
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={(props)=>props.isActive ? "nav-link active ": "nav-link"} to="/dashbord/category/addNewCategory">
              <span data-feather="file"></span>
              Add New Category 
            </NavLink>
          </li>
        </ul>

        
      </div>
    </nav>
    )
}
export default NavMenu;