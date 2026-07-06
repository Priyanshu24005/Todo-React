import React from 'react'
import { useState } from 'react';

const Input = ({addTask}) => {
    let [text, setText] = useState("");

    let [date,setDate] = useState("");

  
  return (
    <div className='border-2 border-blue-900 p-2 h-[20vh] w-[50vw] flex justify-between items-center'>
      <input value={text} type="text" placeholder='Enter task here' className='h-[10vh] w-[25vw] border-2 rounded-2xl p-2'  onChange={(e) => setText(e.target.value)}/>
      <input type="date" className='h-[10vh] w-[12vw] p-2 border-2 rounded-2xl' value={date} onChange={(e) => {setDate(e.target.value)}}/>
      <button className='bg-green-600 p-3 rounded-2xl text-white w-[5vw]' onClick={()=>{
       addTask(text,date);
       setText("")
       setDate("")
      }}>Add</button>
    </div>
  )
}

export default Input
