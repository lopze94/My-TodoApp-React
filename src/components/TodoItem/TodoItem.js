import React, { Component } from 'react';
import Icon from "@material-ui/core/Icon";
import "./TodoItem.css";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none',
      color: this.props.todo.completed ?
        '#aaa' : '#000'
    }
  }
  render() {
    const {id, title} = this.props.todo
    return (
      <div style={this.getStyle()} className="title">
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
            <Icon onClick={this.props.deleteTodo.bind(this, id)} className="delete">close</Icon>
        </p>
      </div>
    );
  }
}

// const btnStyle = {
//   color: "#ccc",
//   float: 'right'
// };
export default TodoItem
