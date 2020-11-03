import React, {Component} from 'react'
import TodoView from "./components/TodoViews";

export default class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        todo: "Walk the dog",
      },
      {
        id: 2,
        todo: "Buy Milk",
      },
      {
        id: 3,
        todo: "Clean shorts",
      },
    ],
    todoValue: "",
  };

  inputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <input
          onChange={this.inputChange}
          style={{ marginTop: 20 }}
          type="text"
          name="todo"
        />{" "}
        <button>Add</button>
        <ul style={{ listStyle: "none" }}>
          {this.state.todoList.map(({ id, todo }) => {
            return <li key={id}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}
