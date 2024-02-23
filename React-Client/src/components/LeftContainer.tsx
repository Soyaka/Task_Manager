import ProfileCard from './ProfileCard'
import Menu from './Menu'
import LogoutBtn from './LogoutBtn'
export default function LeftContainer() {
  return (
    <div className='flex flex-col p-2 shadow-md justify-between h-full gap-4 rounded-xl w-[15%] bg-zinc-800'>
       
        <ProfileCard/>
        <Menu/>
        <LogoutBtn/>
    </div>
  )
}
