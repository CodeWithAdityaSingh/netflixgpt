import { createSlice } from "@reduxjs/toolkit";


let movieSlice = createSlice({
    name : 'movie',
    initialState : {
        movieData : null,
        filteredMovie : null,
        popular : null

    },
    reducers  : {
        addMovieList : (state,action)=>{
            state.movieData= action.payload
        },

        addFilteredMovie : (state,action)=>{
         state.filteredMovie = action.payload
        },
        addPopular : (state,action)=>{
              
            state.popular = action.payload

        }
    }
})

export const{addMovieList,addFilteredMovie,addPopular} = movieSlice.actions
export default movieSlice.reducer