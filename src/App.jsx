import './App.css';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';
import { useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text === '') return;

    setTodos((todos) => [...todos, { title: text, isCompleted: false }]);
    setText('');
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
          <TodoList todos={todos} />
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
