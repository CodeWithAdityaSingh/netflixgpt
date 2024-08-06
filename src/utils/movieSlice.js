import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let movieSlice = createSlice({
    name : 'movie',
    initialState : {
        movieData : null,
        filteredMovie : null
    },
    reducers  : {
        addMovieList : (state,action)=>{
            state.movieData= action.payload
        },

        addFilteredMovie : (state,action)=>{
         state.filteredMovie = action.payload
        }
    }
})

export const{addMovieList,addFilteredMovie} = movieSlice.actions
export default movieSlice.reducer