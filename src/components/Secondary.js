import { useSelector } from "react-redux"

const Secondary = () => {
    let selector = useSelector((store)=> store.movie?.movieData)
      console.log(selector);
      
  return (
    <div className="secondry text-white">
      Secondary
    </div>
  )
}

export default Secondary
