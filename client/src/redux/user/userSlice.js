import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null ,
    loadiing: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loadiing = true 
        },
        signInSuccess: (state, action) =>{
            state.currentUser = action.payload;
            state.loadiing = false;
            state.error = null;
        },
        signInFailure: (state,action) =>{
            state.error = action.payload;
            state.loadiing = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure} = userSlice.actions;

export default userSlice.reducer;