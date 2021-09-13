import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(newTask) {
    newTask === ""
      ? alert("Nada a ser adicionado")
      : setTask([...task, newTask]);
  }
  function handleTask(item) {
    setTask([...task.filter((e) => e !== item)]);
  }
  return (
    <div className="App">
      <div className="App-header">
        <Form newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        <TodoList task={task} handleTask={handleTask} />
      </div>
    </div>
  );
}

export default App;
