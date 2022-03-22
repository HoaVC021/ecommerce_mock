import { combineReducers } from "@reduxjs/toolkit";
import authSlice from '../features/Auth/authSlice'

const rootRecuder = combineReducers({
   auth:authSlice
})

export default rootRecuder