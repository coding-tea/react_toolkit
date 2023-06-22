import { configureStore } from "@reduxjs/toolkit";
import { contrySlice } from "./Slice";


const store = configureStore({
    reducer : {
        contries : contrySlice
    }
});

export default store;
