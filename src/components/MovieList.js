import React from 'react'
import MoviesCards from './MoviesCards'

const MovieList = ({data,title}) => {

  
  return (
    <div>
    <div className=" bg-black -mt-52 py-24">
    <h1 className="text-white    font-bold text-4xl m-4 ">{title}</h1>
    <div className="flex overflow-x-scroll   no-scrollbar bg-black ">
     <div className="secondry text-white  flex z-40  ">
    
      
    { data.map((eachItem)=> <MoviesCards key={eachItem.id} data = {eachItem.poster_path}/>)}
    
     
   
    </div>
   </div>
   </div>
    </div>
  )
}

export default MovieList
