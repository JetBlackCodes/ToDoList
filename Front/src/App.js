import React, { Component } from "react";
import ToDoList from "./components/ToDoList";

class App extends Component {
  state = {
    isFirst: true
  };

  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
