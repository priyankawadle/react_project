import React from "react";
import { Component } from "react";
import "./App.css";

class Test2 extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="App">
        <h1>
          Test Class Componet Created {this.props.name} {this.props.age}
        </h1>
      </div>
    );
  }
}
export default Test2;
