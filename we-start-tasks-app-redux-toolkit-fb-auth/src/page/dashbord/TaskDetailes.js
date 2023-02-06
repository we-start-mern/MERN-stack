import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TasksController from "../../controllers/tasks-controller";
import { taskAction } from "../../redux/task-slice";

let TaskDetailes = () => {
  let dispatch = useDispatch()
  let tasksController=new TasksController();
  let navigator = useNavigate()
  // let [item,setItem] = useState(useSelector((state)=>state.tasks.item));
  let item = useSelector((state)=>state.tasks.item);
  let updateTaskStatusHandler = async (status) => {
    // setItem((prevState)=> {
    //   prevState.status=status;
    //   return {...prevState}
    // })
    // item.status=status
    let updatedTask = {...item};
    updatedTask.status = status;
    let result = await tasksController.update(updatedTask)
    if(result){
    dispatch(taskAction.updateStatus(updatedTask));

    }
  };

  let editTaskHandler = () => {
    navigator('/dashbord/task/updateTask')
  }
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
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
          	<button onClick={()=>updateTaskStatusHandler("In Progress")}
             type="button" className={`btn btn-sm btn-outline-secondary 
             ${item.status == "In Progress"&&"active"}`}>In Progress</button>

            <button onClick={()=>updateTaskStatusHandler("Done")}
             type="button" className={`btn btn-sm btn-outline-secondary 
             ${item.status == "Done"&&"active"}`}>Done</button>

            <button onClick={()=>updateTaskStatusHandler("Complete")}
             type="button" className={`btn btn-sm btn-outline-secondary 
             ${item.status == "Complete"&&"active"}`}>Complete</button>

            <button onClick={()=>updateTaskStatusHandler("Waiting")}
             type="button" className={`btn btn-sm btn-outline-secondary 
             ${item.status == "Waiting"&&"active"}`}>Waiting</button>

            <button onClick={()=>updateTaskStatusHandler("Canceled")}
             type="button" className={`btn btn-sm btn-outline-secondary 
             ${item.status == "Canceled"&&"active"}`}>Canceled</button>
          </div>
          <button type="button" className="btn btn-light-main btn"
          onClick={editTaskHandler}>
             <span data-feather="edit-3"></span> Edit
          </button>
        </div>
      </div>
      <div className="row mt-5">
 
         <div className="col-md-6">
         	<img src="img/1.png"  className="img-fluid rounded de-img" />
         </div>
         <div className="col-md-6  mt-5">
         	<div className=" mb-3">
         	 <span data-feather="bookmark" className="main-color"></span> <strong>Title:</strong> {item.name} 
         	</div>
            <div className="mb-3">
         	 <span data-feather="layers" className="main-color"></span> <strong>Category:</strong> {item.categoryName}
         	</div>
         	<div className="">
         	 <span data-feather="calendar" className="main-color"></span> <strong>Date:</strong> {item.startDate} to {item.endDate}
         	</div>
         </div>
        <div className="row mt-5">
           	<div className="task-info">
           		<p>
                {item.details}
           		</p>

           	</div>
        </div>
      </div>
    </main>
        </Fragment>
    )
}
export default TaskDetailes;