import { useEffect } from "react"
import { POPULAR_API, TMDB_OPTION } from "../utils/constans"
import { useDispatch, useSelector } from "react-redux"
import { addPopular } from "../utils/movieSlice"

let usePopular = ()=>{
    let dispatch = useDispatch()
    let selector = useSelector((store)=> store.movie.popular)

    let fech = async ()=>{

        let data  = await fetch(POPULAR_API, TMDB_OPTION)
        let json = await data.json()
        dispatch(addPopular(json.results))
        
        

    }

    useEffect(()=>{
       !selector && fech()
    },[])
}

export default usePopular;