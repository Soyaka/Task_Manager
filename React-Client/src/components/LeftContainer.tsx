import ProfileCard from './ProfileCard'
import Menu from './Menu'
import LogoutBtn from './LogoutBtn'
export default function LeftContainer() {
  return (
    <div className='flex flex-col py-4 px-2  resize-x  shadow-md justify-between   gap-4 rounded-xl h-screen w-[18%] bg-zinc-800'>
       
        <ProfileCard/>
        <Menu/>
        <LogoutBtn/>
    </div>
  )
}
