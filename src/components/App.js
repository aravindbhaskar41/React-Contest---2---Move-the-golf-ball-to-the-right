import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  //call back function
  buttonClickHandler() {
    console.log("Inside click handler");
    this.setState({ renderBall: true });
  }

  handleKeyDown(event) {
    console.log("handleKeyDown");
    let pos = parseInt(this.state.ballPosition.left);
    console.log(pos);
    pos = pos + 5;
    this.setState({ ballPosition: { left: `${pos}` } });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return (
        <div className="ball" style={this.state.ballPosition}>
          Ball
        </div>
      );
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
