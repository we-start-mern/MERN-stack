import { clear } from "@testing-library/user-event/dist/clear";
import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TasksController from "../../controllers/tasks-controller";
import TaskModle from "../../models/TaskModel";
import { taskAction } from "../../redux/task-slice";

let UpdateTask = () => {
  let categories = useSelector((state)=> state.categories.data);
  let item = useSelector((state)=>state.tasks.item);
  let dispatch = useDispatch();
  let navigator = useNavigate()
  let nameRef = useRef();
  let categoryRef = useRef();
  let detailsRef = useRef();
  let startDateRef = useRef();
  let endDateRef = useRef();

  let taskController = new TasksController();

  let setFormData = () => {
    nameRef.current.value = item.name;
    categoryRef.current.value = item.categoryId;
    detailsRef.current.value = item.details;
    startDateRef.current.value = item.startDate;
    endDateRef.current.value = item.endDate;
  }

  useEffect(setFormData,[])

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if(checkData()){
      save();
    }
    clear();
  }

  let checkData = () => {

    if(nameRef.current.value!=""&&
    categoryRef.current.value!=""&&
    detailsRef.current.value!=""&&
    startDateRef.current.value!=""&&
    endDateRef.current.value!=""){
      return true

    }
    alert("enter required data! ")
    return false
    
  }

  let save = async () => {

    let category = categories.find((element) =>
     element.id ==categoryRef.current.value)

    let updatedTask = new TaskModle(
      nameRef.current.value,
      // categoryRef.current.value,
      category.id,
      category.name,
      detailsRef.current.value,
      startDateRef.current.value,
      endDateRef.current.value,
      item.status);
      updatedTask.id= item.id
      let result = await taskController.update(updatedTask)
      if(result){
        dispatch(taskAction.update(updatedTask));
        navigator(-1)
      }
  }
  let clear = () => {
    nameRef.current.value='';
    categoryRef.current.value='';
    detailsRef.current.value='';
    startDateRef.current.value='';
    endDateRef.current.value=''
  }
    return (
        <Fragment>
             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Update {item.name} </h1>
        
      </div>

   <form className="row mt-5" onSubmit={onSubmitHandler}>


     
    <div className="col-md-12">

      <div className="form-outline mb-4">
         <label  className="form-label">Task name</label>
        <input type="texy" id="loginName" className="form-control" placeholder="Task name" ref={nameRef}/>
      </div>
    </div>
     


      
    <div className="col-md-12">
     
  <div className="form-outline mb-4">
     <label  className="form-label">Task Category</label>
     <select className=" dropdown form-control" ref={categoryRef} >
       {categories.map((element)=>(
       <option value={element.id} key={element.id}  >{element.name}</option>
       ))}       
     </select>
       {/* <input id="input-tags"
        value="category 1,category 2, category 3 , name of category"
         autocomplete="off"
          placeholder="Add Category?"/> */}
     </div>
    </div>
     

         
    {/* <div className="col-md-12">
     
  <div className="form-outline mb-4">
     <label  className="form-label">Image For Task</label>
        <input className="form-control" type="file" id="formFile"/>
     </div>
    </div> */}
     


  
    <div className="col-md-12">
          <label  className="form-label">Task Details</label>
      <div className="form-outline mb-4">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={detailsRef}></textarea>
      </div>
    </div>
     


      
    <div className="col-md-6">
      <div className="form-outline mb-4">
         <label  className="form-label">Start date</label>
        <input type="datetime-local"  className="form-control" placeholder="Task name" ref={startDateRef}/>
      </div>
    </div>
     


      
    <div className="col-md-6">
          <label  className="form-label">End date</label>
      <div className="form-outline mb-4">
        <input type="datetime-local" className="form-control" placeholder="Task name" ref={endDateRef}/>
      </div>
    </div>
     


  

<div>
  <button type="submit" className="pull-right btn btn-main mb-4">Update Task</button>

</div>





</form>

    
      
    </main>
        </Fragment>
    )
}
export default UpdateTask;