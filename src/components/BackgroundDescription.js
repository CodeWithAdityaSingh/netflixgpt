import React from 'react'
import { useSelector } from 'react-redux'

const BackgroundDescription = () => {

  let selector = useSelector((store) => store.movie.movieData)

  if(!selector) return
 
  
  return (
    <div className='absolute pt-80 pl-14 text-white  bg-gradient-to-r from-black aspect-video'>
      <h1 className='font-bold text-6xl mb-4'>{selector[0].original_title}</h1>
      <div className='w-5/12 text-lg '>{selector[0].overview}</div>
      <div>
        <button className='bg-white text-black  text-xl  px-6 py-2 m-3 font-bold rounded-md'>▶️ Play</button>
        <button className='bg-white items-center text-black bg-opacity-30 text-xl w-32 py-2 pr-4 m-3 font-bold rounded-md '>❗MoreInfo</button>
      </div>
    </div>
  )
}

export default BackgroundDescription
