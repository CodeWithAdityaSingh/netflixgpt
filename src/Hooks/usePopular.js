import { useEffect } from "react"
import { POPULAR_API, TMDB_OPTION } from "../utils/constans"
import { useDispatch } from "react-redux"
import { addPopular } from "../utils/movieSlice"

let usePopular = ()=>{
    let dispatch = useDispatch()

    let fech = async ()=>{

        let data  = await fetch(POPULAR_API, TMDB_OPTION)
        let json = await data.json()
        dispatch(addPopular(json.results))
        
        



    }

    useEffect(()=>{
        fech()
    },[])
}

export default usePopular;