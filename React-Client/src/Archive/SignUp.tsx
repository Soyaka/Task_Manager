import { useState } from "react";
import axios from "axios";
export default function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");

  const SendInfos = (e :  React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const cred = {
      name: name,
      login: email,
      pwd: pwd,
    };
    axios
      .post("http://localhost:5555/signup", cred)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
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
        type="text"
        name="name"
        id="name"
        className="border p-2 rounded-lg  "
        placeholder="name"
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="email"
        name="login"
        id="login"
        className="border p-2 rounded-lg   "
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
        Sign Up
      </button>
    </form>
  );
}
