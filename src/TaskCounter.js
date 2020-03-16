import React from "react";

const TaskCounter = props => {
  return (
    <div className="alert alert-warning" role="alert">
      There are <span className="badge badge-warning">{props.count}</span> Items in the List
    </div>
  );
};

export default TaskCounter;
