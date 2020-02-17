import React from "react";

function List(props) {
  return (
    <ul>
      {props.tasks.map(task => {
        return (
          <li
            className={task.isChecked === true ? "strikeThrough" : null}
            key={task.task}
          >
            {task.task}
            <button className="box" onClick={() => props.completedTask(task)}>
              Done
            </button>
            <button onClick={() => props.deleteTask(task.task)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
