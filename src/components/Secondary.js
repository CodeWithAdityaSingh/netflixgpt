import { useSelector } from "react-redux"

import MovieList from "./MovieList";

const Secondary = ({title}) => {
    let selector = useSelector((store)=> store.movie?.movieData)
    let selector2 = useSelector((store)=> store.movie?.popular )
      if(!selector) return
      if(!selector2) return
      
  return (
     <>
      <MovieList data = {selector} title = {"Now Playing"}/>
      <MovieList data = {selector2} title = {"Trending"}/>
      <MovieList data = {selector} title = {"Horror"}/>
      <MovieList data = {selector} title = {"Sports"}/>
     </>
  )
}

export default Secondary
