import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ title, isDone, index, tasks, setupTasks }) => {
  const handleChecked = () => {
    const copyTab = [...tasks];

    if (copyTab[index].isDone === true) {
      copyTab[index].isDone = false;
    } else {
      copyTab[index].isDone = true;
    }

    const orderedTab = [];

    for (let i = 0; i < copyTab.length; i++) {
      if (copyTab[i].isDone === false) {
        orderedTab.push(copyTab[i]);
      }
    }

    for (let i = 0; i < copyTab.length; i++) {
      if (copyTab[i].isDone === true) {
        orderedTab.push(copyTab[i]);
      }
    }

    setupTasks(orderedTab);
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
