import React from "react";

const TaskFilter = () => {
  return (
    <div className="btn-group button-list-center" role="group" aria-label="ToList Actions">
      <button type="button" className="btn btn-warning active">
        Show All
      </button>
      <button type="button" className="btn btn-success">
        Completed
      </button>
      <button type="button" className="btn btn-danger">
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
