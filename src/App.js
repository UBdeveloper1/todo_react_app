import React from "react";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskCounter from "./TaskCounter";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

function App() {
  const tasks = [
    {
      name: "Grocery Shopping",
      completed: false
    },
    {
      name: "Reading Books",
      completed: true
    },
    {
      name: "Study Javascript",
      completed: false
    },
    {
      name: "Cooking",
      completed: true
    }
  ];
  return (
    <div className="container-fluid">
      <Header />
      <TaskCounter count={tasks.length} />
      <AddTask />
      <TaskList tasks={tasks} />
      <TaskFilter />
    </div>
  );
}

export default App;
