import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getBreedNameFromUrl } from "../utils/UrlUtil";
import { DogBreed } from "models";
import { fetchMultipleRandomImages, fetchImageListByBreed } from "services/clientAPI/DogBreedClient";

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
        }).addCase(fetchListOfDogBreedByName.fulfilled,(state,action)=>{
            state.dogs = action.payload;
        })
})


export const fetchRandomListOfDogBreedURL = createAsyncThunk('homeScreen/fetchRandomDogBreed',async ()=>{
        const response = await fetchMultipleRandomImages();
        return response.data.message.map((url)=>{ return {
            name:getBreedNameFromUrl(url),
            url
        }})
})

export const fetchListOfDogBreedByName = createAsyncThunk('homeScreen/fetchDogByBreedName',async (breedName:string)=>{
    console.log("Action dispatch: ", breedName)
    try{
    const response = await fetchImageListByBreed(breedName);
    console.log("response: ", response)
    return response.data.message.map((url)=>{ return {
        name:getBreedNameFromUrl(url),
        url
    }})
}
catch(err){
    console.log('Error: ', err)
}
})

export const {fetchDogs} = homeSlice.actions;
export default homeSlice.reducer; 