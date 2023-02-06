const { createSlice, configureStore } = require("@reduxjs/toolkit");


let taskSlice = createSlice({
    name:"task-slice",
    initialState:{data:[], filterData:[], item: {}, status:"All", category:"All"},
    reducers:{
        create(state, action){
            state.data=[action.payload,...state.data]
            // state.data.push(action.payload);
            state.filterData=state.data;
        },
        read(state, action){
            state.data=action.payload;
            state.filterData=state.data
        },
        update(state, action){
            let index = state.data.findIndex((element)=>
            element.id==action.payload.id);
            state.data[index]=action.payload;
            state.filterData=state.data;
            state.item=action.payload;
        },
        delete(state, action){
            let filterData= state.data.filter((element)=> element.id != action.payload);
            state.data=filterData;
        },

        //.....filter
        filterByCategory(state, action){
            state.category=action.payload;
         if(action.payload == 'All'){
            state.filterData=state.data
         }else{
            state.filterData = state.data.filter(
            (element)=>element.categoryId == action.payload)
         }
         
        },
        filterBySearch(state, action){
            console.log(action.payload)
            if(action.payload!=""){
                
                state.filterData=state.data.filter((element)=>
                 element.name.includes(action.payload));
            }else{
                state.filterData=state.data
            }
        },
        filterByStatus(state, action){
            state.status=action.payload;
            if(action.payload!="All"){
                state.filterData = state.data.filter(
                    (element)=>element.status==action.payload);
                
            }
            else{
                state.filterData=state.data
            }
        },

        setItem(state, action){
            state.item=action.payload
        },

        updateStatus (state, action){
            // action.payload.item.status = action.payload.status
            console.log(action.payload.status)
            let index = state.data.findIndex((element)=>
            element.id==action.payload.id);
            state.data[index]=action.payload;
            state.filterData=state.data;
            state.item=action.payload;
            // console.log(state.item.status)

        }
    }
});
export const taskReducer = taskSlice.reducer;
export const taskAction = taskSlice.actions;