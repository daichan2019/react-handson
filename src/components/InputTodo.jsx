import { Input } from '@chakra-ui/react';
import { Flex, Button } from '@chakra-ui/react';

export const InputTodo = (props) => {
  const { text, handleChange, handleSubmit } = props;

  return (
    <Flex gap="2">
      <Input
        variant="outline"
        value={text}
        onChange={handleChange}
        placeholder="todoを入力してください。"
      />
      <Button onClick={handleSubmit} colorScheme="teal" size="md">
        Add
      </Button>
    </Flex>
  );
};
