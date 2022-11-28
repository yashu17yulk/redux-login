import {configureStore} from "@reduxjs/toolkit";
import  useReducer  from "../features/userSlices";


export default configureStore({
  reducer:{
    user: useReducer,
  }



})