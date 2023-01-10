import { configureStore } from "@reduxjs/toolkit";
import MasterSlice from "./MasterSlice";

const store = configureStore({
    reducer:{
        master:MasterSlice
    }
})
export default store;