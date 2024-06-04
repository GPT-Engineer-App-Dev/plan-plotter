import { useState } from "react";
import { 
  Box, 
  Button, 
  Checkbox, 
  Container, 
  Flex, 
  Heading, 
  IconButton, 
  Input, 
  Link, 
  List, 
  ListItem, 
  Text, 
  VStack 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Box as="header" width="100%" mb={6} textAlign="center">
          <Heading as="h1" size="2xl">Procrastination List</Heading>
          <Text fontSize="lg" color="gray.600">Your ultimate tool to manage procrastination effectively.</Text>
        </Box>
        <Flex width="100%" mb={4}>
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            mr={2}
          />
          <Button onClick={addTodo} colorScheme="green">Add</Button>
        </Flex>
        <List width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" alignItems="center" mb={2}>
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(index)}
                mr={2}
              />
              <Text as={todo.completed ? "s" : ""} flex="1">
                {todo.text}
              </Text>
              <IconButton
                aria-label="Delete todo"
                icon={<FaTrash />}
                onClick={() => deleteTodo(index)}
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
        <Box as="footer" width="100%" mt={10} textAlign="center" borderTop="1px" borderColor="gray.200" pt={4}>
          <Text fontSize="sm" color="gray.500">© 2023 Procrastination List</Text>
          <Link href="https://github.com/your-repo" color="blue.500" isExternal>GitHub Repository</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;