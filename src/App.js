import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [newTask, setupNewTask] = useState("");
  const [tasks, setupTasks] = useState([]);
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      {tasks.map((elem, index) => {
        return (
          <Task
            key={index}
            title={elem}
            index={index}
            tasks={tasks}
            setupTasks={setupTasks}
          />
        );
      })}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTasks = [...tasks];
          newTasks.push(newTask);
          setupTasks(newTasks);
        }}
      >
        <input
          type="text"
          placeholder="new task"
          onChange={(event) => {
            setupNewTask(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
