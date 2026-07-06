import React from 'react'
import Input from './Components/Input'
import Tasks from './Components/Tasks'
import { useState } from 'react';

function App() {

 let [tasks,setTasks] = useState([])

let addTask = (text,date) => {
  if (text.trim() === "") return;

  setTasks((prev) => [
    ...prev,
    {
      id: Date.now(),
      task: text,
      date: date,
    },
  ]);
};


  return (
    <center><div className='self-center m-10'>
      <Input addTask={addTask}/>
      {tasks.map((e)=>{
         return <Tasks key={e.id} task={e} />
      })}
      
    </div>
    </center>
  )
}

export default App
