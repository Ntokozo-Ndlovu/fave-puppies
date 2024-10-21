import { createSlice } from "@reduxjs/toolkit";

import { DogBreed } from "models";

interface State{
    dogBreed?:DogBreed
}


const initialState:State = {
    dogBreed:undefined
}


export const viewDogSlice = createSlice({
    name:"VIEW_DOG_SLICE",initialState,
    reducers:{
        setDogBreed:(state,action)=>{
            state.dogBreed = action.payload
        }
    }
});

export const { setDogBreed } = viewDogSlice.actions;

export  default viewDogSlice.reducer;
