import React from 'react'
import { useSelector } from 'react-redux'
import { MOVIE_CARDS } from '../utils/constans'

const MoviesCards = ({data}) => {
   

    

     
  return (
   <div>
     <div className='m-2 w-40    '>
       <img className='rounded-md' alt='movieCard' src={MOVIE_CARDS + data}></img>
    </div>
   </div>
  )
}

export default MoviesCards
