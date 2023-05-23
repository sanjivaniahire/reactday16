// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import SearchBar from './component/SearchBarr';
import TodoList from './component/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <SearchBar />
      <TodoList />
    </Provider>
  );
};

export default App;

