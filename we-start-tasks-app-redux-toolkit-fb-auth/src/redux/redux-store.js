import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { categoryReducer } from "./category-slice";
import { taskReducer } from "./task-slice";

export const reduxStore = configureStore({
    reducer:{
        tasks:taskReducer,
        categories:categoryReducer,
        auth: authReducer
    }
})