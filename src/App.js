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
  const [search, setupSearch] = useState("");
  const [dark, setupDark] = useState(false);

  return (
    <div>
      <header className={dark && "header-dark"}>
        <div className="header-left">
          <FontAwesomeIcon className="menu" icon="bars" />
          <h1>Todo List</h1>
        </div>
        <button
          className={dark ? "dark hidden" : "dark"}
          onClick={(event) => {
            setupDark(true);
          }}
        >
          Dark Mode
        </button>
        <button
          onClick={() => {
            setupDark(false);
          }}
          className={dark ? "light" : "hidden"}
        >
          Light Mode
        </button>
      </header>
      <div className="limit-header"></div>
      <main className={dark && "main-dark"}>
        <div>
          <input
            className="search"
            placeholder="Search for a task ?"
            type="text"
            onChange={(event) => {
              setupSearch(event.target.value);
            }}
          />
        </div>
        <div className="tasks">
          {tasks.map((elem, index) => {
            const regex = new RegExp(search, "i");
            if (regex.test(elem.title)) {
              return (
                <Task
                  key={index}
                  title={elem.title}
                  isDone={elem.isDone}
                  index={index}
                  tasks={tasks}
                  setupTasks={setupTasks}
                  dark={dark}
                />
              );
            }
          })}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newTasks = [...tasks];
            newTasks.unshift({ title: newTask, isDone: false });
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
