
import Header from './Header'


import Background from './Background'

import useNowPlayingMovie from '../Hooks/UseNowPlaying'
import Secondary from './Secondary'
import usePopular from '../Hooks/usePopular'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'

const Browse = () => {
  
 let selector = useSelector(store => store.gptSlice.gptToggle)


  
useNowPlayingMovie()
usePopular()
  
  return (
    <div >
      <Header/>
     { selector ?  <GptSearchPage/> : <>
      <Background/>
      <Secondary/>
     </> }
      
   
      
      
   
    </div>
  )
}

export default Browse
