import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CategoriesController from "../controllers/categories-controller ";
import { categoryAction } from "../redux/category-slice";

let CategoryRow = (props) => {
  let dispatch = useDispatch();
  let navigator = useNavigate()
  let onDeleteHandler = async () => {
    let categoryController = new CategoriesController()
    let result = await categoryController.delete(props.category.id)
    dispatch(categoryAction.delete(props.category.id))
  }
  let onUpdatedHandler =  () => {
    dispatch(categoryAction.edit(props.category.id))
    // navigator(`/dashbord/category/${props.category.id}/update`)
    navigator(`/dashbord/category/update`)

  }
    return (
        <tr>
      <th scope="row">{props.category.id}</th>
      <td>{props.category.name}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
  {/* <NavLink to={`/dashbord/category/${props.category.id}/update`}>
    <button type="button" class="btn btn-warning">update</button>
  </NavLink> */}
  <button type="button" class="btn btn-warning" onClick={onUpdatedHandler}>update</button>
  <button type="button" class="btn btn-danger" onClick={onDeleteHandler}>delete</button>
</div>
      </td>
    </tr>
    )
}
export default CategoryRow;