const { createSlice } = require("@reduxjs/toolkit");

let categorySlice = createSlice({
    name:"category-slice",
    initialState:{data:[], category: {}},
    reducers:{
        create(state, action){
            state.data.push(action.payload);
        },
        read(state, action){
            state.data=action.payload
        },
        edit(state, action){
            state.category = state.data.find((element)=> element.id ==action.payload);
        },
        update(state, action){
            // alert(action.payload.category.id)
            let index = state.data.findIndex((element)=>element.id==action.payload.category.id)
            state.data[index] = action.payload.category;
            console.log(action.payload.category.name);
        },
        delete(state, action){
            let filterData= state.data.filter((element)=> element.id!=action.payload);
            state.data=filterData;
        },
        
        
    }
});

export const categoryReducer = categorySlice.reducer;
export const categoryAction = categorySlice.actions;