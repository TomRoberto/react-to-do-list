import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash, faBars);

function App() {
  const [newTask, setupNewTask] = useState("");
  const [tasks, setupTasks] = useState([]);
  return (
    <div>
      <header>
        <FontAwesomeIcon className="menu" icon="bars" />
        <h1>Todo List</h1>
      </header>
      <div className="limit-header"></div>
      <main>
        <div className="tasks">
          {tasks.map((elem, index) => {
            return (
              <Task
                key={index}
                title={elem.title}
                isDone={elem.isDone}
                index={index}
                tasks={tasks}
                setupTasks={setupTasks}
              />
            );
          })}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newTasks = [...tasks];
            newTasks.push({ title: newTask, isDone: false });
            setupTasks(newTasks);
          }}
        >
          <input
            className="newtask"
            type="text"
            placeholder="new task"
            onChange={(event) => {
              setupNewTask(event.target.value);
            }}
          />
          <input type="submit" value="Add task" className="submit" />
        </form>
      </main>
    </div>
  );
}

export default App;
