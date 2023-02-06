import React, { Fragment } from "react";
import TableRow from "./TableRow";

class TableExpense extends React.Component{
    render(){
        return <Fragment>
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
                <tbody>
                    {this.props.onExpenses.map((element)=>
                     <TableRow expense={element} key={element.id} onDeleteExpense={this.props.onDeleteExpense}/>
                     )}
        
                </tbody>
        
            </table>
        </section>
        </Fragment>
    }
}
export default TableExpense;