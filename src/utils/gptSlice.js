import { createSlice } from "@reduxjs/toolkit";

let gptSlice = createSlice({
    name : 'gptSlice',
    initialState : {
        gptToggle : null,
        Language : 'English'
    },
    reducers :{

        toggle : (state)=>{

             state.gptToggle = !state.gptToggle
        },
        setLanguage : (state,action)=>{
           state.Language = action.payload
        }

    }
})

export const{toggle,setLanguage} = gptSlice.actions
export default gptSlice.reducer