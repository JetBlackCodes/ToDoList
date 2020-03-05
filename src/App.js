import React, { Component } from "react";
import ToDo from "./components/ToDo";

class App extends Component {
  state = {
    isFirst: true
  };

  render() {
    return (
      <div>
        <ToDo text="hello" header="open me" />
      </div>
    );
  }
}

export default App;
