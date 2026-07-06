import React from 'react';

const Tasks = ({ task, del }) => {
  return (
    <div>
      <div className="p-2 h-fit w-[50vw] flex justify-between items-center">
        <p>{task.task}</p>
        <p className="ml-49">{task.date}</p>
        <button
          className="bg-red-700 text-white p-2 rounded-2xl w-[12vh]"
          onClick={() => del(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tasks;