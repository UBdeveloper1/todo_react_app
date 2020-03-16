import React from "react";

const AddTask = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add Item to List"
        aria-label="Add Item to List"
        aria-describedby="button-addon2"
      />

      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
