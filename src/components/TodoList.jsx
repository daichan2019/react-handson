import { useState } from 'react';

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'task1', isCompleted: false },
    { text: 'task2', isCompleted: false },
    { text: 'task3', isCompleted: false },
    { text: 'task4', isCompleted: false },
  ]);
  return (
    <ul>
      {todos.map((t) => (
        <li>{t.text}</li>
      ))}
    </ul>
  );
};
