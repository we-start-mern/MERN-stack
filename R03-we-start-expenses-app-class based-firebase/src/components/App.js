import axios from "axios";
import React from "react";
import MainImage from '../resourses/images/m1.png'
import FormExpense from "./FormExpense";
import TableExpense from "./TableExpense";

class App extends React.Component{
    constructor(){
        super();
        this.state = {expenses:[]}
    }
     onNewExpenseHandler = (newExpense)=>{
        // alert(newExpense.title)
        axios.post("https://ws-expenses-react-a967c-default-rtdb.firebaseio.com/expenses.json",
        newExpense,
         {
            headers:{
                accpet:"applection.json"

        }}).then(function(response){
            newExpense.firebase_id=response.data.name
            console.log(newExpense)
            this.setState((prevState)=>({
                expenses:[newExpense, ...prevState]
            }))
            // this.setState({expenses:[newExpense,...this.state.expenses]})
           
        }).catch(function(error){
            console.log(error);
        })
        
     }
      onDeleteExpenseHandler= (firebaseId) => {
        axios.delete(`https://ws-expenses-react-a967c-default-rtdb.firebaseio.com/expenses/${firebaseId}.json`,{
            headers:{
                accpet:"applection/json"
            }
        }).then((response)=>{
            let filterExpense = this.state.expenses.filter((element)=> element.firebase_id != firebaseId);
        this.setState({expenses:filterExpense});
        }).catch((error)=>{
            console.log(error)
        })
     }
     componentDidMount(){
       
        this.fetchExpenses();
     }
     fetchExpenses = () => {
       
        axios
        .get("https://ws-expenses-react-a967c-default-rtdb.firebaseio.com/expenses.json",
         {
            headers:{
                accpet:"applection.json"

        }}).then((response)=>{
            // console.log(response)
            let expensesArray=[];
            for(let key in response.data){
                let expense = response.data[key];
                expense.firebase_id=key;
                expensesArray.push(expense);
            }
            this.setState({expenses:expensesArray})
        }).catch(function(error){
            console.log(error)
        })
     }
    render(){
        return <>
            <div className="content-wrapper">
        <section className="top-section">
            <img src={MainImage} alt="this is an image"/>
            <article>
                <span>Welcome to Expenses Manager</span>
                <p>Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam</p>
                <FormExpense onNewExpense={this.onNewExpenseHandler}/>
            </article>
        </section>
        <TableExpense onExpenses={this.state.expenses} onDeleteExpense={this.onDeleteExpenseHandler}/>
    </div>
        </>
    }
}
export default App;