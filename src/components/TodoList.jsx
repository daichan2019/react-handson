import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
} from '@chakra-ui/react';

export const TodoList = ({ todos }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>is Completed</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((todo) => {
            return (
              <Tr>
                <Td>{todo.title}</Td>
                <Td>
                  <Checkbox isChecked={todo.isCompleted}></Checkbox>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
