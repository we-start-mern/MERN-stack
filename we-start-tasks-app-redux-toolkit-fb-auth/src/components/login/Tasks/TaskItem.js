import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { taskAction } from "../../../redux/task-slice";

let TaskItem = (props) => {
  let navigator = useNavigate();
  let dispatch = useDispatch()
  let onShowDetailsHandler = () => {
    dispatch(taskAction.setItem(props.task));
    navigator('/dashbord/task/detailes')
  }
    return (
        <div className="col-md-4">
          <div className="card task card">
            <img src="img/3.png" className="card-img-top"   alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">    <span data-feather="calendar"></span>{props.task.startDate} <span className="main-color">To </span> {props.task.endDate}</h6>
                  <p className="card-text">{props.task.details}</p>
                 <span  className="btn badge-light-warning status-btn Wating">{props.task.status}</span>

                 <button href="#" onClick={onShowDetailsHandler} 
                 className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </button>

              </div>
             </div>
            </div>
    )
}
export default TaskItem;