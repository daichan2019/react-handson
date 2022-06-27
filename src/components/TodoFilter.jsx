import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const TodoFilter = (props) => {
  return (
    <Tabs>
      <TabList>
        <Tab>All</Tab>
        <Tab>Todo</Tab>
        <Tab>Done</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
