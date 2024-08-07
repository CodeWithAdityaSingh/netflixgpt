import React from 'react'
import { useSelector } from 'react-redux'
import { gptSearch } from '../utils/constans'
import Suggestion from './Suggestion'


const GptSearchPage = () => {

  let selector = useSelector(store => store.gptSlice.Language)


  console.log(selector);
  
  return (
  <div className='w-screen h-screen bg-red-400 bg-gradient-to-r from-black'>

    <div className=' absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  ' >
    <input className='w-96 rounded-md h-10' type='text' placeholder={gptSearch[selector].SearchBox}></input>
    <button className='m-4 bg-black text-white py-2 px-11 font-semibold rounded-md'>{gptSearch[selector].search}</button>
   <Suggestion/>

    </div>
  


  </div>
  )
}

export default GptSearchPage
