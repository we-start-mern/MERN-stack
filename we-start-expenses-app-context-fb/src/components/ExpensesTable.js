import { useContext } from "react";
import { AppContext } from "../context/app-context";
import ExpensesRow from "./ExpensesRow";

export default function ExpensesTable (){
    let context= useContext(AppContext)
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
                {context.expenses.map((element)=>(
                <ExpensesRow key={element.id} expense={element} />
                ))}
        
            </table>
        </section>
    )
}