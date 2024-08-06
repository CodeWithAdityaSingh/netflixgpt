
import Header from './Header'

import Background from './Background'

import useNowPlayingMovie from '../Hooks/UseNowPlaying'
import Secondary from './Secondary'

const Browse = () => {

  
useNowPlayingMovie()
  
  return (
    <div>
      <Header/>
      <Background />
      <Secondary/>
    </div>
  )
}

export default Browse
