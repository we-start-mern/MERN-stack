import { Fragment, useEffect, useState } from "react";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesTable from "./components/ExpensesTable";
import  './resours/css/style.css'
import mainImage from './resours/images/m1.png'
function App  () {
    let [expensesArr, setExpensesArr ]=useState([]);
    let onNewExpenseHandler = (expensesArr) => {
        // console.log(expenses)
        
        saveExpenses(expensesArr);
        
    }

    let saveExpenses = (expensesArr) => {
        fetch("https://ws-expenses-react-a967c-default-rtdb.firebaseio.com/expensesArr.json",{
            method: "POST",
            body: JSON.stringify(expensesArr),
            headers: {
                "content-type":"application/json",
                accept:"application/json",
            }
        }).then(function(response){
            return  response.json();

        }).then(function(jsonData){
            expensesArr.firebase_id=jsonData["name"]
            console.log(jsonData)
            setExpensesArr((prevState)=>{
            return ([expensesArr, ...prevState])
        }
        )
        }).catch(function(error){
            console.log(error)
        })
        
    }

    let fetchExpenses = ()=>{
        fetch("https://ws-expenses-react-a967c-default-rtdb.firebaseio.com/expensesArr.json",
        {
            method: "GET",
            headers:{
                accept: "applection/json"
            },
        }).then(function(response){
            return  response.json()
        }).then(function(jsonData){
            let expensesJsonArr = [];
            for(let key in jsonData){
                let expense = jsonData[key]
                expense.firebase_id = key;
                expensesJsonArr.push(expense)
                // console.log(expensesJsonArr)
                
                setExpensesArr(expensesJsonArr)
              console.log( expensesJsonArr);

                // console.log(key);
                // console.log(jsonData[key])
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    useEffect(fetchExpenses, []);
    // fetchExpenses();

    // let onDeleteExpenseHandler = (firebaseId) => {
    //     let filterExpense = expensesArr.filter((element)=> element.firebase_id !=firebaseId)
    //     setExpensesArr(filterExpense)
    // // }
    let onDeleteExpenseHandler = (firebaseId) => {

        fetch(`https://ws-expenses-react-a967c-default-rtdb.firebaseio.com/expensesArr/${firebaseId}.json`,{
            method: "DELETE",
            headers: {
                accept:"applection/json"
            },
        }).then(function (response){
            response.json();
            
        }).then(function(jsonData){
            let filterExpense = expensesArr.filter((element)=> element.firebase_id != firebaseId)
        setExpensesArr(filterExpense)
        
            
        }).catch(function(error){
            console.log(error)
        })
    }
    // onDeleteExpenseHandler()
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
                <ExpensesForm onNewExpense={onNewExpenseHandler}/>
            </article>
        </section>
        <ExpensesTable onExpensesArr={expensesArr} onDeleteExpense= {onDeleteExpenseHandler}/>
    </div>
        </Fragment>
    )
}
export default App;