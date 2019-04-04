import React, { Component } from 'react'
import TodoItem from "../TodoItem/TodoItem.js";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
    ))
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos