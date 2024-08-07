import { useEffect } from "react"
import { addMovieList } from "../utils/movieSlice"
import { useDispatch } from "react-redux"
import { NOW_PLAYING_API, TMDB_OPTION } from "../utils/constans"

let useNowPlayingMovie = ()=>{

    let dispatch = useDispatch()


    useEffect(()=>{
       nowplayingFetch()
     },[])
   
     let nowplayingFetch = async ()=>{
       let data = await fetch(NOW_PLAYING_API, TMDB_OPTION)
       let json = await data.json()
       dispatch(addMovieList(json.results))
      
     }
}

export default useNowPlayingMovie;