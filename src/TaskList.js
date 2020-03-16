import React from "react";
import Task from "./Task";

const TaskList = props => {
  console.log(props.tasks);
  return (
    <React.Fragment>
      <ul className="list-group list-pointer">
        {props.tasks.map(task => {
          return <Task task={task} />;
        })}
      </ul>
      <br />
    </React.Fragment>
  );
};

export default TaskList;
