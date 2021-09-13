import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  //  state={ c : 'NewsMonkey'}
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={8}/>
      </div>
    );
  }
}
