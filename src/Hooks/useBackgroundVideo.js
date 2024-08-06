import { useEffect, useState } from "react"
import { TMDB_OPTION } from "../utils/constans"

let useBackgroundVideos = (dataa)=>{

    let[bgVideo,setBgVideo] = useState(null)

    const{id} = dataa
 
    useEffect(()=>{
     fech()
    },[])
    

     let fech = async ()=>{
 
         let data =  await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', TMDB_OPTION)
         let json = await data.json()
         setBgVideo(json.results)
 
     }

     return bgVideo;
}

export default useBackgroundVideos