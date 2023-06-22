import { configureStore } from "@reduxjs/toolkit";
import contrySlice from "./contrySlice";

const store = configureStore({
    reducer : {
        contries : contrySlice
    }
});

export default store;