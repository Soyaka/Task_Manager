import { useState } from "react"
import TaskCard from "./TaskCard"
import axios from "axios"
import { User, Task, Session } from './types';
export default function MainContainer() {
  const [tasks , setTasks] = useState<Task[]>([])





  axios.get("http://localhost:5555/api/tasks",
  {
    withCredentials:true
  }
  ).then((res: { data: Task[] })=> setTasks(res.data))



  return (
    <div className='flex p-4 bg-zinc-800 h-screen flex-1 rounded-xl gap-5 '>
      {tasks.map(task =>(
        <TaskCard title={task.title} description={task.desc} status={task.status}/>
      ))}
    </div>
  )
}
