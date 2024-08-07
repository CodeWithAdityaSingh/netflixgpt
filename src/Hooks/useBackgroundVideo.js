import { useEffect, useState } from "react"
import {  BG_VIDEO_API, TMDB_OPTION } from "../utils/constans"

let useBackgroundVideos = (dataa)=>{

    let[bgVideo,setBgVideo] = useState(null)

    const{id} = dataa
 
    useEffect(()=>{
     fech()
    },[])
    

     let fech = async ()=>{
 
         let data =  await fetch(BG_VIDEO_API+id+'/videos?language=en-US', TMDB_OPTION)
         let json = await data.json()
         setBgVideo(json.results)
 
     }

     return bgVideo;
}

export default useBackgroundVideos