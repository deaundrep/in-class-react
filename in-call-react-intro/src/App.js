import React, {Component} from 'react'
import { v4 as uuidv4 } from "uuid";
import TodoViews from "./components/TodoViews";
export default class App extends Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        todo: "Walk the dog",
        editToggle: false,
      },
      {
        id: uuidv4(),
        todo: "Buy Milk",
        editToggle: false,
      },
      {
        id: uuidv4(),
        todo: "Clean shorts",
        editToggle: false,
      },
    ],
    todoValue: "",
    editValue:"",
    showErrorMessage: false,
    showNoTodoMessage: false,
  };

  handleInputChange = (event) => {
    if (this.state.showErrorMessage) {
      this.setState({
        showNoTodoMessage: false,
      });
    }

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //checks to see if line 20 is false, if so showErrorMessage 
    if (this.state.todoValue.length === 0) {
      this.setState({
        showErrorMessage: true,
      });
      return;
    }
    //?? is todoValue whatever user the puts in?
    let newTodoObj = {
      id: uuidv4(),
      todo: this.state.todoValue,
    };

    let newArray = [...this.state.todoList, newTodoObj];

    this.setState({
      todoList: newArray,
      todoValue: "",
    },
    () => {
      //this means that the user added something to the todoValue
      if (this.state.todoValue.length > 0) {
        this.setState({
          showNoTodoMessage: false,
    });
  }
}
);
};

addFunc = () => {
  console.log("Add Func");
};

appHandleDeleteTodo = (targetID) => {
  let copiedArray = [...this.state.todoList];
  let filteredArray = copiedArray.filter(({ id }) => {
    return id !== targetID;
  });
  this.setState(
    {
    todoList: filteredArray,
  },
  () =>{
    ////checks to see if line 6 has input, if not showTodoMessage
    if (this.state.todoList.length === 0){
      this.setState({
      showTodoMessage:true,
      });
    }
  }
  );
  
};


appHandleEditTodo = (targetID) => {
  let copiedArray = [...this.state.todoList];

  let editTodoValue;

  let updatedTodoArray = copiedArray.map((item) => {
    if (item.id === targetID){
      item.editToggle = true;
      editTodoValue = item.todo
    }
    return item;
  });
  this.setState({
    todoList: updatedTodoArray,
    editValue: editTodoValue,
    disableEditButton: true,
  })
};





appHandleOnChange = (event) =>{
  this.setState({
    [event.target.name]: event.target.value,
  });
};

appHandleUpdateSubmit = (targetID) =>{
  let copiedArray = [...this.state.todoList];

  let updatedTodoArray = copiedArray.map((item) => {
    if (item.id === targetID){
      item.editToggle = false;
      item.todo = this.state.editValue;

    }
    return item;
  });
  this.setState({
    todoList: updatedTodoArray,
    disableEditButton: false,
  });
};



render() {
  const { todoList, showErrorMessage, showNoTodoMessage, editValue,disableEditButton } = this.state;

  return (
    <div style={{ textAlign: "center" }}>
      {showErrorMessage ? (
        <div style={{ color: "red", marginTop: 10 }}>
          Please, enter something todo!
        </div>
      ) : null}
      <input
        onChange={this.handleInputChange}
        style={{ marginTop: 20 }}
        type="text"
        name="todoValue"
        value={this.state.todoValue}
      />{" "}
      <button onClick={this.handleSubmit}>Add</button>
        {/* <ul>{this.showTodoList()}</ul> */}
        {/* <ul style={{ listStyle: "none" }}>
          {this.state.todoList.map(({ id, todo }) => {
            return <li key={id}>{todo}</li>;
          })}
        </ul> */}
        {showNoTodoMessage ? (
          <div style={{ marginTop: 10, color: "blue" }}>
            Please add something to do!
          </div>
        ) : (
          <TodoViews
            todoList={todoList}
            appHandleDeleteTodo={this.appHandleDeleteTodo}
            appHandleEditTodo={this.appHandleEditTodo}
            appHandleOnChange={this.appHandleOnChange}
            editValue={editValue}
            disableEditButton={disableEditButton}
            appHandleUpdateSubmit={this.appHandleUpdateSubmit}
          />
        )}
      </div>
    );
  }
}