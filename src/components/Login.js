import { useRef, useState } from "react";
import Header from "./Header";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

let Login = () => {
  let [toggle, setToggle] = useState(true);
  let [error, setError] = useState(null);
  

  
  let email = useRef(null);
  let password = useRef(null);
  let name = useRef(null)

  let formValidation = (email, password) => {
    let emailValidation =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    let passworlValidation =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!emailValidation) return "Email is invalid !";
    if (!passworlValidation) return "Password is invalid !";
    else return false;
  };

  return (
    <div className="h-screen relative">
      <Header />
      <img
        className="h-screen w-screen object-cover "
        alt="Main-img"
        src="
https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
      ></img>

      <div className="  bg-black  text-center p-10 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 rounded-lg bg-opacity-75 leading-[40px] w-80 text-white ">
        <div className="font-bold text-4xl  my-4 ">
          {toggle ? "Sign-In" : "Sign-Up"}
        </div>
        {!toggle && (
          <div className="m-2 z-30">
            <input ref={name}
              className="bg-gray-500  bg-opacity-65"
              type="text  "
              placeholder=" Name"
            ></input>
          </div>
        )}
        <div className="m-2 z-30 ">
          <input
            ref={email}
            className="bg-gray-500 bg-opacity-65 "
            type="email  "
            placeholder=" Email"
          ></input>
        </div>
        <div className="my-4">
          <input
            ref={password}
            className="bg-gray-500 bg-opacity-65"
            type="password"
            placeholder=" Password"
          ></input>
        </div>
        <div className="text-red-700 mr-10 font-bold">{error}</div>
        <div className="bg-red-700 rounded-sm m-3 mx-auto w-24 cursor-pointer">
          <button
            className=""
            onClick={() => {
              let data = formValidation(
                email.current.value,
                password.current.value
              );
              console.log(email);
              // console.log(email);
              // console.log(password);
              setError(data);

              if (data) return;
             

              //Sigh-Up Logic
              if (!toggle) {
                createUserWithEmailAndPassword(
                  auth,
                  email.current.value,
                  password.current.value
                )
                  .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(auth.currentUser, {
                      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                      // Profile updated!
                      // ...
                    }).catch((error) => {
                      // An error occurred
                      // ...
                    });
                    
                    // ...
                   
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode, errorMessage);
                    setError(errorCode + " " + errorMessage)
                    // ..
                  });
              }
          

              //Sign-In Logic
              if (toggle) {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode,errorMessage);
                    setError(errorCode + " " + errorMessage)
                  });
              }
            }}
          >
            {toggle ? "Sign-In" : "Sign-Up"}
          </button>
        </div>
        <div className="w-16 m-auto font-bold">Or</div>
        <div className="w-44 m-auto font-semibold bg-slate-400 bg-opacity-65 ">
          Use a Sign-in Code
        </div>
        <p
          className=" w-52 m-auto  font-semibold cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "New to Netflix?Sign Up Now" : "Have an account?Sign-In"}
        </p>
      </div>
    </div>
  );
};

export default Login;
