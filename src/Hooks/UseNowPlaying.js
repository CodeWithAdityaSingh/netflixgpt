import { useEffect } from "react"
import { addMovieList } from "../utils/movieSlice"
import { useDispatch } from "react-redux"
import { TMDB_OPTION } from "../utils/constans"

let useNowPlayingMovie = ()=>{

    let dispatch = useDispatch()


    useEffect(()=>{
       nowplayingFetch()
     },[])
   
     let nowplayingFetch = async ()=>{
       let data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTION)
       let json = await data.json()
       dispatch(addMovieList(json.results))
      
     }
}

export default useNowPlayingMovie;