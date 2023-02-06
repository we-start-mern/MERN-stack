let ExpensesRow =(props)=>{
    let onDeleteExpenseHandler = () =>{
        props.onDeleteExpense(props.onExpensesArr.firebase_id);
    }
    return (
        <tbody>
                    <tr>
                        <td>{props.onExpensesArr.id}</td>
                        <td>{props.onExpensesArr.date}</td>
                        <td>{props.onExpensesArr.value}</td>
                        <td>{props.onExpensesArr.description}</td>
                        <td>
                            <a href="#" onClick={onDeleteExpenseHandler}>Delete</a>
                        </td>
                    </tr>
        
                </tbody>
    )
}
export default ExpensesRow