import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


import guessDogReducer from 'screens/GuessDogBreedSlice';
import homeReducer from 'screens/HomeScreenSlice';
import viewDogBreedReducer from 'screens/ViewDogSlice';

export const store = configureStore({
    reducer:{
        guessDog:guessDogReducer,
        home:homeReducer,
        viewDogBreed:viewDogBreedReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>