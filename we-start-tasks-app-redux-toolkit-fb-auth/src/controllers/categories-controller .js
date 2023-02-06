import axios from "axios";
import CategoryModel from "../models/CategoryModel";

class CategoriesController {
    async create(category){
        let token = localStorage.getItem("token")
     try {
         let response = await axios.post(`https://we-start-task-app-default-rtdb.firebaseio.com/categories.json?auth=${token}`,
        {
            name: category.name,
        }
        );
            // console.log(response);

        if(response.status==200){
            return response.data.name;
        }
     } catch (error) {
        return null;

     }
    };
    async read(){
        let token = localStorage.getItem("token")
        try {
          let response = await axios.get
          (`https://we-start-task-app-default-rtdb.firebaseio.com/categories.json?auth=${token}`);
          if(response.data.length != 0){
            let categories = [];
            for(let key in response.data){
                let category = new CategoryModel();
                category.id =key;
                category.name = response.data[key].name
                console.log(key)
                categories.push(category);
            }
            // console.log(categories)
            return  categories;
          }
          return []
        } catch (error) {
            
        }
    };
     async update(category){
        let token = localStorage.getItem("token")
        try {
            let response = await axios.put(`https://we-start-task-app-default-rtdb.firebaseio.com/categories/${category.id}.json?auth=${token}`
            ,
            {
                name:category.name,
            }
            );
            return true;
            
        } catch (error) {
            return false;
        }
     };
     async delete(id){
        let token = localStorage.getItem("token")
        try {
            let response = await axios.delete(`https://we-start-task-app-default-rtdb.firebaseio.com/categories/${id}.json?auth=${token}`);
             return true
        } catch (error) {
            return false
        }
    };
}
export default CategoriesController;