import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({

    name : 'user',
    initialState : {

        userInfo : null,
     
    },
    reducers : {

        adduserInfo : (state,action)=>{
         state.userInfo = action.payload
        },

        removeUserInfo : (state,action)=>{
           state.userInfo = null
        }
    }
})

export const{adduserInfo,removeUserInfo} = userSlice.actions
export default userSlice.reducer