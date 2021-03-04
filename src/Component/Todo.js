import React, { Component } from "react";
import PropType from "prop-types";

class Todo extends Component {
  getStyle = () => {
    return {
      display: "flex",
      "align-items": "center",
      backgroundColor: "pink",
      padding: "5px",
      margin: "0",
      borderBottom: "1px solid white",
      textDecoration: this.props.todo.isDone ? "none" : "line-through",
    };
  };
  render() {
    const id = this.props.todo.id;
    return (
      <h2 style={this.getStyle()}>
        <input onClick={() => this.props.toggleDone(id)} type="checkbox" style={{ "margin-right": "15px" }}></input>{" "}
        {this.props.todo.todo}
        <button onClick={this.props.deltodo.bind(this, this.props.todo.id)} style={btn}>
          {" "}
          x{" "}
        </button>
      </h2>
    );
  }
}

Todo.propType = {
  todo: PropType.object.isRequired,
};
const btn = {
  backgroundColor: "peach",
  margin: "15px",
  color: "black",
  borderRadius: "5px",
  border: "none",
};
export default Todo;
