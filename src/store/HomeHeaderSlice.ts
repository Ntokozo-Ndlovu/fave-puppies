import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllBreeds } from "services/clientAPI/DogBreedClient";
import { IListItem } from "../components/ListItem";


export interface State{
    searchKey:string,
    searchResult?:IListItem[],
    allResults?:{[key:string]:string[]}
}

const initialState:State = {
    searchKey:''
}

export const fetchRandomDogBreedNames = createAsyncThunk('homeHeader/fetchAllBreedNamesList',async ()=>{
    const response = await fetchAllBreeds();
    return response.data.message;
})


export const HomeHeaderSlice = createSlice(
{
    name: 'HOME_HEADER_SLICE',
    initialState,
    reducers:{
            onSearch:(state,action)=>{
                if(state.allResults && action.payload != ''){
                state.searchResult = Object.keys(state.allResults)
                .filter((key:string)=> {
                    return key.toLowerCase().includes(action.payload.toLowerCase())})
                .map((key)=>{
                    return {name:key,value:key}});
                }
                    else {
                        state.searchResult = []
                    }
            }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRandomDogBreedNames.pending,(state)=>{

        }).addCase(fetchRandomDogBreedNames.fulfilled,(state,action)=>{
            console.log('payload: ',action.payload)
            state.allResults = action.payload
            ;
        }).addCase(fetchRandomDogBreedNames.rejected,(state)=>{

        })
}
}
)


export const { onSearch} = HomeHeaderSlice.actions;

export default HomeHeaderSlice.reducer; 