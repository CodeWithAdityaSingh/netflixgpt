import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { adduserInfo } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

let Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let selector = useSelector((store) => store.user.userInfo)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;
        console.log(user);

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
    <div className="flex justify-between absolute w-screen items-center">
      <img
        className="w-60  "
        alt="headerImg"
        src="
     https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>

     {
      selector&&  <div  className="cursor-pointer"
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
      <img
        className="w-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQH85p8d-QhZgILvGbIS9yZ67JoTb2s4Pohw&s"
        alt="signou"
      ></img>

      <div className="mr-5 font-bold">Sign-Out</div>
    </div>
     }
    </div>
  );
};

export default Header;
