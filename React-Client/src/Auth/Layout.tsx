import { useState } from "react";
import Loging from "./Loging";
import SignUp from "./SignUp";
export default function Layout() {
  const [AuthState, setAuthState] = useState("signup");
  return (
      <div className="flex flex-col   w-[30%]  text-white  min-h-[50%] max-h-[50%]  p-10">
        <div className="flex  self-center flex-row   gap-0 p-1 w-[50%] ">
          <button
            className={`p-2 rounded-l-md w-[50%] border border-rose-500 ${
              AuthState == "signup" ? "bg-rose-500" : ""
            } `}
            onClick={() => setAuthState("signup")}
          >
            {" "}
            Sign Up
          </button>
          <button
            className={`p-2 rounded-r-md w-[50%] border border-rose-500 ${
              AuthState == "login" ? " bg-rose-500" : ""
            } `}
            onClick={() => setAuthState("login")}
          >
            {" "}
            Log In
          </button>
        </div>
        <div className="">{AuthState == "login" ? <Loging /> : <SignUp />}</div>
      </div>
  );
}
