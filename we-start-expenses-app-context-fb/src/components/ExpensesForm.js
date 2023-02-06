import { useContext, useRef } from "react";
import { AppContext } from "../context/app-context";

function ExpensesForm (){

    let titleRef = useRef();
    let dateRef = useRef();
    let valueRef = useRef();
    let descriptionRef = useRef();
    let context = useContext(AppContext);
    // let onClickHandler = (event) => {
    //    event.prevDefault();
    //    alert(titleRef.current.value)

    // }
    let onSubmitHandler = (event) => {
        if(checkData()){
            saveExpenses();
        }
        
        event.preventDefault();
        clear();
       
       
    }
    

    let checkData = ()=> {
        if(titleRef.current.value !='' &&
           dateRef.current.value !='' &&
           valueRef.current.value !='' &&
           descriptionRef.current.value !='' ){
            return true;
            
           }
           alert("input is empty")
           return false;
           
    }
    
    let saveExpenses = () => {
        let expense ={
        id: Date.now(),
        title: titleRef.current.value,
        date: dateRef.current.value,
        value: valueRef.current.value,
        description: descriptionRef.current.value,
       }
       console.log(expense);
    //    props.onNewExpense(expenses);
       context.setExpenses((prevState)=>{
            return [expense, ...prevState];
            });
        
       clear();

    }
    
    let clear = () => {
        titleRef.current.value = '';
        dateRef.current.value = '';
        valueRef.current.value = '';
        descriptionRef.current.value = '';
    }
    
    
    return (
        <form onSubmit={onSubmitHandler}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" placeholder="Title" ref={titleRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" id="date"  ref={dateRef}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="value">Value</label>
                            <input type="number" name="value" id="value" placeholder="Value" ref={valueRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" id="description" placeholder="Description" ref={descriptionRef}/>
                        </div>
                    </div>    

                    <button type="submit">save</button>

                </form>
    )
}
export default ExpensesForm