import React from 'react';
import Header from './layout/Header';
import ToDoForm from './Form/ToDoForm';
import './App.css';

const App = () => {
  return (
    <div className="App font-mono bg-gray-400">
      <Header />
      <ToDoForm></ToDoForm>
    </div>
  );
};

export default App;
