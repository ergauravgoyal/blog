import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    };
  }
  render() {
    return <div style={{ color: this.state.color }}>Hello World</div>;
  }
}
export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }
  handleColorChange = () => {
    debugger;
    this.setState({ color: "green" });
  };
  render() {
    return (
      <div>
        <Child color={this.state.color} key={this.state.color} />
        <button onClick={this.handleColorChange}>Change color</button>
      </div>
    );
  }
}
