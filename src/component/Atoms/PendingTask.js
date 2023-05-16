import React from "react";
import styles from './PendingTask.module.css'


function PendingTask({ task, onTaskComplete, onTaskDelete }) {
  return (
    <div className={styles.inputBox}>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>

      <button className={styles.btn1} onClick={() => onTaskComplete(task.id)} >Completed</button>
      <button className={styles.btn2}  onClick={() => onTaskDelete(task.id)}>X</button>
    </div>
  );
}

export default PendingTask;