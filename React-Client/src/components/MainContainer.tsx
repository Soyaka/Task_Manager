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
<div className='flex flex-wrap gap-8   h-full bg-zinc-800 p-6 rounded-xl w-[85%] overflow-x-hidden'>
        {tasks.map(task => (
          <TaskCard title={task.title} description={task.desc} status={task.status} label={task.label} />
        ))}
        <div><AddTaskUI /></div>
      </div>
    </>
  )
}
