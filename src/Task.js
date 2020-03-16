import React from "react";

const Task = props => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p className={props.task.completed ? "todo-complete" : ""}>{props.task.name}</p>
      <span>
        <button type="button" className="btn btn-primary btn-sm">
          Complete
        </button>
        <button type="button" className="btn btn-primary btn-sm">
          Delete
        </button>
      </span>
    </li>
  );
};

export default Task;
