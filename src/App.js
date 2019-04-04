import React, { Component } from "react";
import AppHeader from "./components/AppHeader/AppHeader.js";
import Todos from "./components/Todos/Todos.js";
import AppFooter from "./components/AppFooter/AppFooter.js";
import AddTodo from "./components/AddTodo/AddTodo.js";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "My todo 1",
        completed: false
      },
      {
        id: 2,
        title: "My todo 2",
        completed: false
      },
      {
        id: 3,
        title: "My todo 3",
        completed: false
      },
      {
        id: 4,
        title: "My todo 4",
        completed: false
      }
    ]
  };
//Toggle Complete TodoItem
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
//Delete TodoItem
  deleteTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  render() {
    return (
      <div style={{maxWidth:"600px",margin:"0 auto",marginTop:"20px",borderRadius:"10px",boxShadow:"0 0 20px rgba(0,0,0,.3"}}>
        <AppHeader />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
        <AddTodo />
        <AppFooter/>
      </div>
    );
  }
}

export default App;
