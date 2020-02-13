import React from "react";
import "./App.css";

function List(props) {
  console.log(props);
  return (
    <ul>
      {props.tasks.map(task => {
        return (
          <form>
            <li key={task}>
              {task}
              <input
                className="box"
                type="checkbox"
                onClick={this.completedTasks}
                isChecked={this.state.isChecked}
              ></input>
            </li>
          </form>
        );
      })}
    </ul>
  );
}

class App extends React.Component {
  state = {
    isChecked: false,
    tasks: ["Lecture @ 11.30", "Lunch @ 13.00", "Sprint 14.00 - 17.00"]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List:</h1>
          <List tasks={this.state.tasks} />
        </header>
      </div>
    );
  }

  completedTasks = event => {
    this.setState(currentState => {
      console.log(currentState);
    });
  };
}

export default App;
