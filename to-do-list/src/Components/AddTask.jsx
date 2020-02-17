import React, { Component } from "react";

class AddTask extends Component {
  state = {
    input: ""
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Add New Task:</p>
        <input onChange={this.handleChange} type="text" value={input}></input>
        <button type="submit">add task</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    this.props.addNewTask({ task: input, isChecked: false });
    this.setState({ input: "" });
  };
}

export default AddTask;
