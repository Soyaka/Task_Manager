import { useState } from "react"
import TaskCard from "./TaskCard"
import AddTaskUI from "./AddTaskUI";
import axios from "axios"
import { Task} from './types';
export default function MainContainer() {
  const [tasks, setTasks] = useState<Task[]>([])
  
  axios.get("http://localhost:5555/api/tasks",
    {
      withCredentials: true
    }
  ).then((res: { data: Task[] }) => setTasks(res.data))
  return (
    <>
      <div className=' grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4  grid-rows-4  h-full bg-zinc-800  p-3  rounded-xl w-[85%] overflow-hidden '>
        {tasks.map(task => (
          <TaskCard title={task.title} description={task.desc} status={task.status} />
        ))}
        <div><AddTaskUI /></div>
      </div>
    </>
  )
}
