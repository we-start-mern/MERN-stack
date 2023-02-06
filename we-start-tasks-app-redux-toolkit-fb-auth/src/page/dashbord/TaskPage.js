import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "../../components/login/Tasks/TaskItem";
import TasksController from "../../controllers/tasks-controller";
import { taskAction } from "../../redux/task-slice";

let TaskPage = () => {
  let tasks = useSelector((state)=>state.tasks.filterData);
  let categories = useSelector((state)=> state.categories.data);
  let dispatch = useDispatch()
  let tasksController = new TasksController()
  let onCategoryFilterChangeHandler = (event) => {
    alert(event.target.value)
    dispatch(taskAction.filterByCategory(event.target.value))
  }
  let onFilterByStatusChangeHandler = (event) => {
    dispatch(taskAction.filterByStatus(event.target.value))
    alert(event.target.value)
  }

  let fetchTask = async () => {
    if (tasks.length == 0){
      let tasks = await tasksController.read();
    dispatch(taskAction.read(tasks));
    }
  }

  useEffect(()=>{fetchTask()},[])



    return (
        <Fragment>
             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">



        <h1 className="h2">Dashboard</h1>


        <div className=" mb-2 mb-md-0">
<div className="d-flex align-items-center ms-3 ms-lg-4">
          
</div>
<div className="d-flex align-items-center ms-3 ms-lg-4">
		
</div>
          </div>
          <ul className="list-inline">
  <li className="list-inline-item">
   <select onChange={onFilterByStatusChangeHandler} className=" dropdown form-control pull-right" 
  placeholder="Filter By status" autocomplete="off">
      <option value="All" >Filter By status</option>
      <option value="Done">Done</option>
      <option value="In Progress">In Progress</option>
      <option value="Complete">Complete</option>
      <option value="Canceled">Canceled</option>
      <option value="Waiting">Waiting</option>
    
     
    </select></li>
  <li className="list-inline-item mt-3">
   <select className=" dropdown form-control pull-right"
    placeholder="Filter By status" autocomplete="off"
    onChange={onCategoryFilterChangeHandler} >
  
      <option value="All"  >Filter By category</option>
       {categories.map((element)=>
      (
        <option value={element.id} key={element.id}>{element.name}</option>
      ))}
    </select></li>
  
</ul>
         
  
      </div>
      <div className="row mt-5">
        
   
        {tasks.map((element)=>
        (
          <TaskItem key={element.id} task={element}/>
          
        ))}
      </div>
    </main>
        </Fragment>
    )
}
export default TaskPage;