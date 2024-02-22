import { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [redirect, setRedirect] = useState(false);

  const sendInfos = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5555/login",
        {
          login: email,
          pwd: pwd,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("Received cookies:", document.cookie, response);
        if (response.status === 200) {
          setRedirect(true);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      {redirect && <Navigate to="/dashboard" replace />}
      <form
        onSubmit={(e) => sendInfos(e)}
        className="flex flex-col justify-around gap-4 p-4 text-black rounded-lg w-full"
      >
        <h2 className="self-center text-xl text-zinc-600">
          Register To Start Tasking
        </h2>
        <input
          type="email"
          name="login"
          id="login"
          className="border p-2 rounded-lg"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="pwd"
          id="pwd"
          className="border p-2 rounded-lg"
          placeholder="password"
          onChange={(e) => setPwd(e.target.value)}
        />
        <div></div>
        <button
          type="submit"
          className="px-2 py-2 w-[50%] self-center rounded-lg bg-rose-500 text-white"
        >
          Log In
        </button>
      </form>
    </>
  );
}
