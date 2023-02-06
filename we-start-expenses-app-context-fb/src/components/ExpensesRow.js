import { useContext } from "react"
import { AppContext } from "../context/app-context"

let ExpensesRow =(props)=>{
    let context = useContext(AppContext)
    let onDeleteExpenseHandler = () =>{
        let filterExpense = context.expenses.filter(
            (element)=> element.id !=props.expense.id
            );
        context.setExpenses(filterExpense)
        
    
    }
    return (
        <tbody>
                <tr>
                    <td>{props.expense.id}</td>
                    <td>{props.expense.date}</td>
                    <td>{props.expense.value}</td>
                    <td>{props.expense.description}</td>
                    <td>
                        <a href="#" onClick={onDeleteExpenseHandler}>Delete</a>
                    </td>
                </tr>
        
        </tbody>
    )

    }
export default ExpensesRow;