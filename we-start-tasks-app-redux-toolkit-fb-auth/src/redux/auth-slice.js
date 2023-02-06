import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
    name:'auth-slice',
    initialState:{loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
     token: localStorage.getItem('token')},
    reducers:{
        login(state, action){
            state.loggedIn=true;
            state.token=action.payload;
        },
        register(state, action){
            state.loggedIn=true;
            state.token=action.payload;
        },
        logout(state, action){
            state.loggedIn= false;
            state.token="";
        },
    }
});
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;