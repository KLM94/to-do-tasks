import React from "react";
import "./App.css";
import List from "./Components/List";
import AddTask from "./Components/AddTask";

class App extends React.Component {
  state = {
    tasks: [
      { task: "Lecture @ 11.30", isChecked: false },
      { task: "Lunch @ 13.00", isChecked: false },
      { task: "Sprint 14.00 - 17.00", isChecked: false }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List:</h1>
          <List
            tasks={this.state.tasks}
            completedTask={this.completedTask}
            deleteTask={this.deleteTask}
          />
          <AddTask addNewTask={this.addNewTask} />
        </header>
      </div>
    );
  }

  addNewTask = addNewTask => {
    this.setState(currentState => {
      return { tasks: [addNewTask, ...currentState.tasks] };
    });
  };

  // want to pass an individual task therefore need to wrap it in an anonymous function to pass it as an argument above
  // would need to pass it event if needed to use prevent default
  completedTask = clickedTask => {
    this.setState(currentState => {
      const newTasks = currentState.tasks.map(task => {
        if (clickedTask === task.task) {
          const copiedTask = { ...task };
          copiedTask.isChecked = !copiedTask.isChecked;
          return copiedTask;
        }
        return task;
      });

      return { tasks: newTasks };
      // if clickedtask is equal to task in the current state array -> flip isChecked
      // return { isChecked: !currentState.tasks.clickedTask.isChecked };
    });
  };

  deleteTask = deletedTask => {
    const { tasks } = this.state;

    const filteredTasks = tasks.filter(task => task !== deletedTask);
    console.log({ tasks: filteredTasks });
    this.setState({ tasks: filteredTasks });
  };
}

export default App;
