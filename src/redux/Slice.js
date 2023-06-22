import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    'contries' : [
        {id : "MO", name : "Morocoo"},
        {id : "USA", name : "United state"},
        {id : "JP", name : "Japan"}
    ]
};

export const contrySlice = createSlice({
    name : 'contries',
    state : intialState,
    reducers : {
        find : (state, action) => {
            state.contries = [
                {id : "MO", name : "Morocoo"},
                {id : "USA", name : "United state"},
                {id : "JP", name : "Japan"}
            ];
            state.contries = state.contries.filter(item => item.id === action.payload );
        },

        show : (state, action) => {
            state.contries.push(action.payload);
        },

        deleteById : (state, action) => {
            state.contries.filter(item => item.id !== action.payload)
        },
    },
})

export const {find, show, deleteById} = contrySlice.actions;
export default contrySlice.reducer;