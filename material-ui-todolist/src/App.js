import "./App.css";
import { Box, Typography } from "@material-ui/core";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";

function App() {
  return (
    <Box>
      <Typography variant="h2" align="center">
        TODOS
      </Typography>
      <AddTodoForm />
      <Todo />
    </Box>
  );
}

export default App;
