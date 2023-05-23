import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from '../store/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleStatus(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.name}</span>
          <button onClick={() => handleToggle(todo.id)}>Toggle</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
