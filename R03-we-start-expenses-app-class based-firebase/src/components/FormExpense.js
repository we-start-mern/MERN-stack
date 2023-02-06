import React, { Fragment } from "react";

class FormExpense extends React.Component {
    constructor(){
        super();
        this.state={
            titleValue:"",
            dateValue:"",
            priceValue:0,
            descriptionValue:""}
    }
     titleOnChangeHandler = (event) => {
        this.setState({titleValue: event.target.value})
     }
     dateOnChangeHandler = (event) => {
        this.setState({dateValue: event.target.value})
     }
     priceOnChangeHandler = (event) => {
        this.setState({priceValue: event.target.value})
     }
     descriptionOnChangeHandler = (event) => {
        this.setState({descriptionValue: event.target.value})
     }
      onSubmitHandler = (event) => {
        event.preventDefault();
        if(this.checkData()){
            let expenses = this.getObjectExpense();
            // console.log(expenses)
        this.props.onNewExpense(expenses);
        this.clear();

        }
      }
      checkData = () => {
        if(this.state.titleValue!=""&&
           this.state.dateValue!=""&&
           this.state.priceValue!=""&&
           this.state.descriptionValue!=""){
            return true;
           }
           alert("error")
           return false
      }
      getObjectExpense = () => {
        return {
            id: Date.now(),
            title:this.state.titleValue,
            date: this.state.dateValue,
            price:this.state.priceValue,
            description: this.state.descriptionValue
        }
      }
      clear = () =>{
        this.setState({titleValue:"", dateValue:"", priceValue:0, descriptionValue:""})
     }
    
    render(){
        return <>
            <form onSubmit={this.onSubmitHandler}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" placeholder="Title" value={this.state.titleValue}
                                onChange={this.titleOnChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" id="date" value={this.state.dateValue}
                                onChange={this.dateOnChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="value">Value</label>
                            <input type="number" name="value" id="value" placeholder="Value" value={this.state.priceValue}
                                onChange={this.priceOnChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" id="description" placeholder="Description" value={this.state.descriptionValue}
                                onChange={this.descriptionOnChangeHandler}
                            />
                        </div>
                    </div>    

                    <button type="submit">save</button>

                </form>
        </>
        
    }
}
export default FormExpense;