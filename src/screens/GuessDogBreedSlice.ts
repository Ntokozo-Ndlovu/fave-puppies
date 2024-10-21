import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchRandomImage } from "services/clientAPI/DogBreedClient";
import { getBreedNameFromUrl } from 'utils';

export const fetchRandomDogBreedURL = createAsyncThunk('guessDogBreed/fetchRandomDogBreed',async ()=>{
    const response = await fetchRandomImage();
    return response.data.message;
})

interface State {
    numberOfAttempts:number,
    numberOfWins: number,
    randomDogBreedImage:{
        breedName:string,
        uri: string
    }
}

const initialState:State =  {
    numberOfAttempts: 0,
    numberOfWins: 0,
    randomDogBreedImage:{
        breedName:"",
        uri:""
    }
}

export const guessDogBreedSlice = createSlice({
    name:'GuessDogBreed',
    initialState,
    reducers:{
            incrementNumberOfAttempt: state => {
                state.numberOfAttempts += 1
            },
            incrementNumberOfWin: state => {
                state.numberOfWins += 1
            }
    },
    extraReducers: builder => builder.addCase(fetchRandomDogBreedURL.pending,(state,action)=>{
     }).addCase(fetchRandomDogBreedURL.fulfilled,(state,action)=>{
        state.randomDogBreedImage.uri = action.payload;
        state.randomDogBreedImage.breedName = getBreedNameFromUrl(action.payload);

    }).addCase(fetchRandomDogBreedURL.rejected,(state,action)=>{        
    })
})




export const { incrementNumberOfAttempt, incrementNumberOfWin} = guessDogBreedSlice.actions;

export default guessDogBreedSlice.reducer;