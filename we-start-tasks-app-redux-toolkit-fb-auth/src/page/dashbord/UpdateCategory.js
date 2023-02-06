import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesController from "../../controllers/categories-controller ";
import CategoryModel from "../../models/CategoryModel";
import { categoryAction } from "../../redux/category-slice";

let UpdateCategory = () => {
  // let categories = useSelector((state)=>state.categories.data)
  let category = useSelector((state)=>state.categories.category);
  let CategoryController = new CategoriesController();
  let nameRef = useRef();
  // let [category,setCategory] = useState({})
  let dispatch = useDispatch()
  let params = useParams();
  let navigator = useNavigate()
  
  // let getTargetCategory = () => {
  //  let target = categories.find((element)=> element.id ==params.id);
  //  nameRef.current.value= target.name;
  //  setCategory(target);
  // }
  // useEffect(getTargetCategory, [])
  let setCategoryName = () => {
    nameRef.current.value = category.name
  }
  useEffect(setCategoryName,[])
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
    let UpdatedCategory = new CategoryModel( nameRef.current.value);
    UpdatedCategory.id=category.id

  let result = await CategoryController.update(UpdateCategory)
  // setCategory(UpdatedCategory);
  // category.name=nameRef.current.value;
  // alert(category.name)
  if (result){
    dispatch(categoryAction.update({category:UpdatedCategory}));
  navigator(-1)
  }
  
}
    return (
        <Fragment>
             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Update {category.name} </h1>
        
      </div>

   <form className="row mt-5" onSubmit={onSubmitHandler}>


     
    <div className="col-md-12">

      <div className="form-outline mb-4">
         <label  className="form-label">Category name</label>
        <input type="texy" id="loginName" className="form-control"
         placeholder="Category name" ref={nameRef} 

         />
      </div>
    </div>
<div>
  <button type="submit" className="pull-right btn btn-main mb-4">Update Category</button>

</div>





</form>

    
      
    </main>
        </Fragment>
    )
}
export default UpdateCategory;