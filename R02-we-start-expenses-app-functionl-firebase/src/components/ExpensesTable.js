import ExpensesRow from "./ExpensesRow";

export default function ExpensesTable (props){
    return (
        <section className="bottom-section">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Value</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {props.onExpensesArr.map((element)=>(
                <ExpensesRow key={element.id} onExpensesArr={element} onDeleteExpense={props.onDeleteExpense}/>
                ))}
        
            </table>
        </section>
    )
}