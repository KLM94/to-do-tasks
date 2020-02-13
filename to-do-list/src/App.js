import React from "react";
import "./App.css";
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
            <button
              className="box"
              onClick={() => props.completedTask(task.task)}
            ></button>
          </li>
        );
      })}
    </ul>
  );
}
// task.isChecked === true ? className="strikeThrough" : null
class App extends React.Component {
  state = {
    tasks: [
      { task: "Lecture @ 11.30", isChecked: true },
      { task: "Lunch @ 13.00", isChecked: false },
      { task: "Sprint 14.00 - 17.00", isChecked: true }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List:</h1>
          <List tasks={this.state.tasks} completedTask={this.completedTask} />
        </header>
      </div>
    );
  }

  // want to pass an individual task therefore need to wrap it in an anonymous function to pass it as an argument above
  // would need to pass it event if needed to use prevent default
  completedTask = clickedTask => {
    this.setState(currentState => {
      console.log(currentState, clickedTask);
      const newTasks = currentState.tasks.map(task => {
        if (clickedTask === task.task) {
          const copiedTask = { ...task };
          copiedTask.isChecked = !copiedTask.isChecked;
          return copiedTask;
        }
        return task;
      });
      console.log(newTasks);
      return { tasks: newTasks };
      // if clickedtask is equal to task in the current state array -> flip isChecked
      // return { isChecked: !currentState.tasks.clickedTask.isChecked };
    });
  };
}

export default App;
