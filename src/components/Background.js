import React from 'react'
import BackgroundDescription from './BackgroundDescription'
import BackgroundVideo from './BackgroundVideo'
import { useSelector } from 'react-redux'

const Background = ({data}) => {
    
  let selector = useSelector((store) => store.movie.movieData)
  
  if(!selector) return


  return (
    <div className='background h-screen w-screen '>
       <BackgroundDescription />
       <BackgroundVideo data = {selector[0]} />
    </div>
  )
}

export default Background
