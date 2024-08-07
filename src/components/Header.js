import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { adduserInfo } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { toggle } from "../utils/gptSlice";
import { HEADER_LOGO, select } from "../utils/constans";
import { setLanguage } from "../utils/gptSlice";

let Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let languages = useRef(null);


  let selector = useSelector((store) => store.user.userInfo);
  let gptSelector = useSelector((store) => store.gptSlice.gptToggle);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;

        dispatch(
          adduserInfo({ Name: displayName, Email: email, user_id: uid })
        );
        navigate("/browse");
      } else {
        dispatch(removeUserInfo());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="header flex justify-between absolute w-screen items-center z-20 top-0  ">
      <div className="flex items-center ">
        <img
          className="w-60  "
          alt="headerImg"
          src= {HEADER_LOGO}
        ></img>
        {selector && (
          <>
            <div className="text-white mr-3  cursor-pointer  font-semibold  ">
              Home
            </div>
            <div className="text-white mr-3 cursor-pointer   font-semibold">
              TV Shows
            </div>
            <div className="text-white mr-3 cursor-pointer   font-semibold">
              Now Playing
            </div>
            <div className="text-white mr-3 cursor-pointer  font-semibold ">
              new&Popular
            </div>
            <div className="text-white mr-3 cursor-pointer  font-semibold ">
              MyLists
            </div>
          </>
        )}
      </div>

      {selector && (
        <div className="flex gap-6 rounded-md">


         {gptSelector&& <div className="p-2">
            <select className="p-2"
              ref={languages}
              onClick={(e) => {
             
                dispatch(setLanguage(languages.current.value))

              }}
            >
              {select.map((element) => (
                <option key={element} value={element}>{element}</option>
              ))}
            </select>
          </div>}


          <div
            className="bg-white cursor-pointer bg-opacity-60 h-6 p-6  flex justify-center items-center rounded-md font-bold "
            onClick={() => {
              dispatch(toggle());
            }}
          >
            {gptSelector ? "Home" : "GptSearch"}
          </div>

          <div
            className="cursor-pointer flex items-center justify-center px-3 hover:bg-white hover:text-black  border mt-1 mr-3 rounded-md  h-10  text-white "
            onClick={() => {
              signOut(auth)
                .then(() => {
                  navigate("/");
                })
                .catch((error) => {
                  // An error happened.
                  console.log("error");
                });
            }}
          >
            <div className="font-bold ">Log-Out</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
