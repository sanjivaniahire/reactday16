import React, { useState } from "react";
import PendingTask from "../Atoms/PendingTask";
import styles from './PendingTaskList.module.css'

function PendingTasksList({ tasks }) {
  const [pendingTasks, setPendingTasks] = useState(tasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleTaskComplete = (taskId) => {
    const updatedTasks = pendingTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setPendingTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = pendingTasks.filter((task) => task.id !== taskId);
    setPendingTasks(updatedTasks);
  };

  const handleNewTaskChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };
    setPendingTasks([...pendingTasks, newTask]);
    setNewTaskTitle("");
  };

  return (
    <div>
      <h2 className={styles.heading}>Pending Tasks:</h2>
      <form onSubmit={handleNewTaskSubmit}>
        <input
        className={styles.inputBox}
          type="text"
          value={newTaskTitle}
          onChange={handleNewTaskChange}
          placeholder="Add new task"
        />
        <button type="submit">Add</button>
      </form>
      {pendingTasks.map((task) => (
        <PendingTask
          key={task.id}
          task={task}
          onTaskComplete={handleTaskComplete}
          onTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
}

export default PendingTasksList;