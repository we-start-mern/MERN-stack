import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import CategoriesController from "../../controllers/categories-controller ";
import CategoryModel from "../../models/CategoryModel";
import { categoryAction } from "../../redux/category-slice";
let AddNewCategory = () => {
  let nameRef = useRef();
  let dispatch = useDispatch()

  let categoryController = new CategoriesController()

let onSubmitHandler = (event) =>{
  event.preventDefault();
 
  if(checkDate()){
    save();
  }
}
let checkDate = () =>{
  if(nameRef.current.value!=""){
    return true
  }
  return false
}
let save = async ()=>{
  let category = new CategoryModel( nameRef.current.value)
  let AddNewCategoryId = await categoryController.create(category);
  if (AddNewCategoryId!= null){
    category.id=AddNewCategoryId;
    console.log(category);
    dispatch(categoryAction.create(category));
  nameRef.current.value="";
  }else{
    alert("error")
  }
}
    return (
        <Fragment>
             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Add New Category </h1>
        
      </div>

   <form className="row mt-5" onSubmit={onSubmitHandler}>


     
    <div className="col-md-12">

      <div className="form-outline mb-4">
         <label  className="form-label">Category name</label>
        <input type="texy" id="loginName" className="form-control"
         placeholder="Category name" ref={nameRef}/>
      </div>
    </div>
<div>
  <button type="submit" className="pull-right btn btn-main mb-4">Add New Category</button>

</div>





</form>

    
      
    </main>
        </Fragment>
    )
}
export default AddNewCategory;