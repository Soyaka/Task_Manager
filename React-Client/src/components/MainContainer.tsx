import TaskCard from "./TaskCard"
export default function MainContainer() {
  return (
    <div className='flex p-4 bg-zinc-800 h-screen flex-1 rounded-xl gap-5 '>
      <TaskCard title=" Project3" description=" complete the project of the second task" status={"done"}/>
      <TaskCard title=" Project3" description=" complete the project of the second task" status={"todo"}/>
    </div>
  )
}
