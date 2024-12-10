import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
