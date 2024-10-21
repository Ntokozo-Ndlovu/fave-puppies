import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getBreedNameFromUrl } from "../utils/UrlUtil";
import { DogBreed } from "models";
import { fetchMultipleRandomImages } from "services/clientAPI/DogBreedClient";

interface State{
    dogs:DogBreed[]
}

const initialState:State = {
    dogs:[]
}

export const homeSlice = createSlice({
    name: 'HOME_SCREEN_SLICE',
    initialState:initialState,
    reducers:{
        fetchDogs: (state,action) =>{
            return {dogs:action.payload}
        }
    },
    extraReducers: builder =>
        builder.addCase(fetchRandomListOfDogBreedURL.pending,(state)=>{
            state;
        }).addCase(fetchRandomListOfDogBreedURL.rejected,(state)=>{
            state;
        }).addCase(fetchRandomListOfDogBreedURL.fulfilled,(state,action)=>{
            if(typeof action.payload === 'string')
                state.dogs = [];
            else
            state.dogs =  action.payload || [];
        })
})


export const fetchRandomListOfDogBreedURL = createAsyncThunk('homeScreen/fetchRandomDogBreed',async ()=>{
        let response = await fetchMultipleRandomImages();

        return response.data.message.map((url)=>{ return {
            name:getBreedNameFromUrl(url),
            url
        }})
})


export const {fetchDogs} = homeSlice.actions;
export default homeSlice.reducer; 