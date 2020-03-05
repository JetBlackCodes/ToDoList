import React, { Component } from "react";
import ToDo from "./components/ToDo";
import Lab2 from "./utils";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
