import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../apis/axiosClient";

export const loginAsync = createAsyncThunk('auth/login', (body) =>{
   const res = axiosClient.post('auth/login',body);
    return res.data;
})

const initialState = {
    token:'',
    isLoading:false
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{
        [loginAsync.pending]: (state) => {
            state.loading = true;
          },
      
          // Request successful
          [loginAsync.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.token = action.payload.accessToken;
            state.isLoading = false;
          },
          // Request error
          [loginAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.errors = 'Something went wrong! 😩';
          },
    }
})

const { actions, reducer } = authSlice;

export default reducer;