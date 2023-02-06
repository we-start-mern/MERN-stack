import { Routes, Route, Navigate } from "react-router-dom";
import AddNewTask from "../page/dashbord/AddNewTask";
import AddNewCategory from "../page/dashbord/AddNewCategory";
import CategoriesPage from "../page/dashbord/CategoriesPage";
import Dashbord from "../page/dashbord/Dashbord";
import TaskDetailes from "../page/dashbord/TaskDetailes";
import TaskPage from "../page/dashbord/TaskPage";
import LoginPage from "../page/LoginPage";
import UpdateCategory from "../page/dashbord/UpdateCategory";
import UpdateTask from "../page/dashbord/UpdateTaskPage";
import { useSelector } from "react-redux";

let AppRoutes = () => {
    let loggedIn = useSelector((state)=> state.auth.loggedIn)
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashbord" element={loggedIn ? <Dashbord/> : <Navigate to="/"/>}>
                <Route path="/dashbord" element={<TaskPage/>}/>
                <Route path="/dashbord/addNewTask" element={<AddNewTask/>}/>
                <Route path="/dashbord/category" element={<CategoriesPage/>}/>
                <Route path="/dashbord/category/addNewCategory" element={<AddNewCategory/>}/>
                <Route path="/dashbord/category/update" element={<UpdateCategory/>}/>
                <Route path="/dashbord/task/detailes" element={<TaskDetailes/>}/>
                <Route path="/dashbord/task/updateTask" element={<UpdateTask/>}/>

            </Route>
        </Routes>
    )
    
}
export default AppRoutes;