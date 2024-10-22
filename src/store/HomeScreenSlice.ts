import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getBreedNameFromUrl } from "../utils/UrlUtil";
import { DogBreed } from "models";
import { fetchMultipleRandomImages, fetchImageListByBreed } from "services/clientAPI/DogBreedClient";

interface State{
    dogs:DogBreed[],
    isLoading:boolean
}

const initialState:State = {
    dogs:[],
    isLoading:false
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
            state.isLoading = true;
        }).addCase(fetchRandomListOfDogBreedURL.rejected,(state)=>{
            state.isLoading = false;
        }).addCase(fetchRandomListOfDogBreedURL.fulfilled,(state,action)=>{
            state.dogs =  action.payload || [];
            state.isLoading = false
        }).addCase(fetchListOfDogBreedByName.fulfilled,(state,action)=>{
                state.dogs = action.payload || [];
            state.isLoading = false;
        }).addCase(fetchListOfDogBreedByName.rejected,(state)=>{
            state.isLoading = false;
        }).addCase(fetchListOfDogBreedByName.pending,(state)=>{
            state.isLoading = true;
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
    const response = await fetchImageListByBreed(breedName);
    return response.data.message.map((url)=>{ return {
        name:getBreedNameFromUrl(url),
        url
    }})

})

export const {fetchDogs} = homeSlice.actions;
export default homeSlice.reducer; 