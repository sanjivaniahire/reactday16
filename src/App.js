
import React from "react";
import PendingTasksList from "./component/Molecules/PendingTaskList";
import './App.css'

function App() {
  const tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
  ];

  return (
    <div className='container'>
      <PendingTasksList tasks={tasks} />
    </div>
  );
}

export default App;
