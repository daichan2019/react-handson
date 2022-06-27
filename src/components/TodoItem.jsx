import { Td, Checkbox } from '@chakra-ui/react';

export const TodoItem = ({ props }) => {
  const { todo, handleCheck } = props;

  return (
    <Tr key={index}>
      <Td>{todo.title}</Td>
      <Td>
        <Checkbox
          isChecked={todo.isCompleted}
          onChange={() => handleCheck(todo)}
        ></Checkbox>
      </Td>
    </Tr>
  );
};
