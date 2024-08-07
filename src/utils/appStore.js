import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './userSlice'
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'

let appStore = configureStore({

    reducer :{
       user : userReducer,
       movie : movieReducer,
       gptSlice : gptReducer
    }
})


export default appStore;