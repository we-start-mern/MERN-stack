import { Fragment, useContext, useState } from "react";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesTable from "./components/ExpensesTable";
// import { AppContext } from "./context/app-context";
import  './resourses/css/style.css'
import mainImage from './resourses/images/m1.png'
function App  () {
    // let [expensesArr, setExpensesArr ]=useState([]);
        // let context= useContext(AppContext)

    // let onNewExpenseHandler = (expensesArr) => {
    //     // console.log(expenses)
    //     context.setExenses((prevState)=>{
    //         return ([expensesArr, ...prevState])
    //     }
    //     )
        
    // }
    // let onDeleteExpenseHandler = (id) => {
    //     let filterExpense = expensesArr.filter((element)=> element.id !=id)
    //     context.setExenses(filterExpense)
    // }
    return(
        <Fragment>
                <div className="content-wrapper">
        <section className="top-section">
            <img src={mainImage} alt="this is an image"/>
            <article>
                <span>Welcome to Expenses Manager</span>
                <p>Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam</p>
                <ExpensesForm />
            </article>
        </section>
        <ExpensesTable />
    </div>
        </Fragment>
    )
}
export default App;