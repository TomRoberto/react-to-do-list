import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ title, index, tasks, setupTasks }) => {
  const [isDone, setupIsDone] = useState(false);
  return (
    <div className="task">
      <input
        type="checkbox"
        onChange={(event) => {
          if (isDone) {
            setupIsDone(false);
          } else {
            setupIsDone(true);
          }
        }}
      />
      <p className={isDone && "task-done"}>{title}</p>
      <FontAwesomeIcon
        className="trash"
        icon="trash"
        onClick={() => {
          const newTasks = [...tasks];
          const newTasks2 = [];
          for (let i = 0; i < newTasks.length; i++) {
            if (i !== index) {
              newTasks2.push(newTasks[i]);
            }
          }
          setupTasks(newTasks2);
        }}
      />
    </div>
  );
};

export default Task;
