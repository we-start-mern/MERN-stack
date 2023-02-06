import { createContext, useState } from "react";

export const AppContext= createContext({
    expenses: [],
    setExenses: ()=> {}
});

export const AppContextProvider = (props)=>{
    let [expensesArr, setExpensesArr ]=useState([]);
    return (
      <AppContext.Provider
    
      value={{
        expenses:expensesArr,
        setExpenses:setExpensesArr
      }}>
    {props.children}
    
    </AppContext.Provider>
    );
}