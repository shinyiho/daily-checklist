import React, { Component } from "react";
import Todo from "./Todo";
import PropType from "prop-types";

class Todos extends Component {
  render() {
    console.log(this.props.todos);

    // return this.props.todos.map(todo=><h2>{todo.id}</h2>)

    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleDone={this.props.toggleDone} deltodo={this.props.deltodo} />
        ))}
      </div>
    );
  }
}

Todos.propType = {
  todos: PropType.array.isRequired,
};

export default Todos;
