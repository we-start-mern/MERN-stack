import React, { createContext, useState } from "react";
import Mark from "../models/Mark";

export const AppContext = createContext<{
    marks:Mark[];
    setMarksFunc:(mark: Mark)=> void;
    deleteMark:(id:Number)=> void;
}>({
    marks:[],
    setMarksFunc: ()=>{},
    deleteMark: ()=>{}
});
export const AppContextProvider = (props:{children:React.ReactNode}) =>{
    let [marksArr, setMarksArr] = useState<Mark[]>([]);
    let setNewMark = (mark:Mark)=>{
        setMarksArr((prevState:Mark[])=>{
            return[mark,...prevState];
        })
    };
    let deleteMark = (id:Number)=>{
       let filtered = marksArr.filter((element)=> element.id != id);
    setMarksArr(filtered);
    }
    return (
        <AppContext.Provider value={{
            marks:marksArr,
            setMarksFunc:setNewMark,
            deleteMark:deleteMark



        }
        }>
         {props.children}
        </AppContext.Provider>
    )
}