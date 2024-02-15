import { LuLogOut } from "react-icons/lu";



export default function LogoutBtn() {
  return (
    <div className=" p-2 text-2xl  font-Rubik flex items-center text-rose-500 shadow-md rounded-lg gap-4  border hover:bg-zinc-700  cursor-pointer">
      <LuLogOut/>
      Log Out

    </div>
  )
}
