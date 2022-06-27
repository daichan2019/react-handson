import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react';
import { TodoItem } from './TodoItem';

export const TodoFilter = (props) => {
  const { displayTodos, handleCheck, handleFilterChange } = props;

  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => handleFilterChange('all')}>All</Tab>
        <Tab onClick={() => handleFilterChange('todo')}>Todo</Tab>
        <Tab onClick={() => handleFilterChange('complete')}>Complete</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>is Completed</Th>
                </Tr>
              </Thead>
              <Tbody>
                {displayTodos.map((todo) => {
                  return (
                    <TodoItem
                      key={index}
                      todo={todo}
                      handleCheck={handleCheck}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
