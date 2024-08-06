import { addFilteredMovie } from "../utils/movieSlice";
import useBackgroundVideos from "../Hooks/useBackgroundVideo";
import { useDispatch, useSelector } from "react-redux";
const BackgroundVideo = ({ data }) => {
  let dispatch = useDispatch();
  let selector = useSelector((store) => store.movie.filteredMovie);

  let bgVideo = useBackgroundVideos(data);
  if (!bgVideo) return;
  let trailer = bgVideo.filter((element) => element.type === "Trailer");
  dispatch(addFilteredMovie(trailer[0].key));
  if (!selector) return;

  return (
    <div className="backgroundVideo -mt-28 ">
      <iframe
        className="w-full aspect-video  "
        src={"https://www.youtube.com/embed/" + selector  + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
         
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
