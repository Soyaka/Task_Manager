import { useState } from "react";
import axios from "axios";
export default function Loging() {
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");

  const SendInfos = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const cred = {
    //   login: email,
    //   pwd: pwd,
    // };
    axios
    .post(
      "http://localhost:5555/login",
      {
        login: email,  // Change this line to match your server's expected field name
        pwd: pwd,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log("Received cookies:", document.cookie, response);
      // handle response data
    })
    .catch((error) => console.error("Error:", error));
  };

  return (
    <form
      action=""
      className=" flex flex-col justify-around gap-4 p-4  text-black rounded-lg  w-full   "
    >
      <h2 className=" self-center text-xl text-zinc-600">
        Register To Start Tasking{" "}
      </h2>
      <input
        type="email"
        name="login"
        id="login"
        className="border p-2 rounded-lg"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        name="pwd"
        id="pwd"
        className="border p-2 rounded-lg  "
        placeholder="password"
        onChange={(e) => setpwd(e.target.value)}
      />
      <div></div>
      <button
        type="submit"
        onClick={(e) => SendInfos(e)}
        className="px-2 py-2 w-[50%] self-center rounded-lg bg-rose-500 text-white"
      >
        Log In
      </button>
    </form>
  );
}