import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ title, isDone, index, tasks, setupTasks }) => {
  const handleChecked = () => {
    const copyTab = [...tasks];
    const newTab = [];
    for (let i = 0; i < copyTab.length; i++) {
      if (i === index) {
        if (copyTab[i].isDone === true) {
          copyTab[i].isDone = false;
          newTab.push(copyTab[i]);
        } else {
          copyTab[i].isDone = true;
          newTab.push(copyTab[i]);
        }
      } else {
        newTab.push(copyTab[i]);
      }
    }
    setupTasks(newTab);
  };

  const handleDeletion = () => {
    const newTasks = [...tasks];
    const newTasks2 = [];
    for (let i = 0; i < newTasks.length; i++) {
      if (i !== index) {
        newTasks2.push(newTasks[i]);
      }
    }
    setupTasks(newTasks2);
  };
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={isDone && "checked"}
        onChange={(event) => handleChecked()}
      />
      <p className={isDone && "task-done"}>{title}</p>
      <FontAwesomeIcon
        className="trash"
        icon="trash"
        onClick={() => handleDeletion()}
      />
    </div>
  );
};

export default Task;
