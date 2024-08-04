import { useState } from "react";
import Header from "./Header";

let Login = () => {
  let [toggle, setToggle] = useState(true);
  console.log(toggle);

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
            <input
              className="bg-gray-500  bg-opacity-65"
              type="text  "
              placeholder=" Name"
            ></input>
          </div>
        )}
        <div className="m-2 z-30 ">
          <input
            className="bg-gray-500 bg-opacity-65 "
            type="email  "
            placeholder=" Email"
          ></input>
        </div>
        <div className="my-4">
          <input
            className="bg-gray-500 bg-opacity-65"
            type="password"
            placeholder=" Password"
          ></input>
        </div>
        <div className="bg-red-700 rounded-sm m-3 mx-auto w-24 cursor-pointer">
          <button className="">{toggle ? "Sign-In" : "Sign-Up"}</button>
        </div>
        <div className="w-16 m-auto font-bold">Or</div>
        <div className="w-44 m-auto font-semibold bg-slate-400 bg-opacity-65 ">Use a Sign-in Code</div>
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
