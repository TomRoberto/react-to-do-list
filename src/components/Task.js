import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ title, index, tasks, setupTasks }) => {
  const [isDone, setupIsDone] = useState(false);
  return (
    <div>
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
      <div className={isDone && "task-done"}>{title}</div>
      <FontAwesomeIcon
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
