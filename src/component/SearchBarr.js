// src/components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../store/todoSlice';

const SearchBar = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    const todo = {
      name,
      id: uuidv4(),
      status: 'pending',
    };
    dispatch(addTodo(todo));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default SearchBar;
