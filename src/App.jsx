import './App.css';
import { useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { InputTodo } from './components/InputTodo';
import { TodoFilter } from './components/TodoFilter';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text === '') return;

    setTodos((todos) => [...todos, { title: text, isCompleted: false }]);
    setText('');
  };

  const handleFilterChange = (value) => setFilter(value);

  const displayTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'todo') return !todo.isCompleted;
    if (filter === 'complete') return todo.isCompleted;
  });

  const handleCheck = (checked) => {
    const newTodos = todos.map((todo) => {
      if (todo.index === checked.key) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <ChakraProvider>
        <Container maxW="2xl" centerContent>
          <InputTodo
            text={text}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoFilter
            displayTodos={displayTodos}
            handleFilterChange={handleFilterChange}
            handleCheck={handleCheck}
          />
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
