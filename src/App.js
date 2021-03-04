import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Todos from "./Component/Todos";
import Header from "./Component/Header";
import Addtodo from "./Component/Addtodo";
import About from "./Component/About";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    todos: [
      { id: uuid(), isDone: true, todo: "Do Traversy's React Example" },
      { id: uuid(), isDone: true, todo: "Do Andriel's Robofriends" },
      { id: uuid(), isDone: true, todo: "Play with Canvas" },
    ],
  };
  toggleDone = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      }),
    });
    // console.log("great!");
  };
  deltodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter((item) => item.id !== id)] });
    console.log(this);
  };
  onsubmit = (e, title) => {
    //如何回傳e 和title
    e.preventDefault();
    console.log(this);
    console.log(title);

    // let target= e.target.querySelector("input");
    let newtodo = { id: uuid(), isDone: true, todo: title };
    this.setState({ todos: [...this.state.todos, newtodo] });
    // title = "";
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Addtodo onsubmit={this.onsubmit} />
                <Todos todos={this.state.todos} toggleDone={this.toggleDone} deltodo={this.deltodo} />
              </React.Fragment>
            )}
          />
          <Route path="/About" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
