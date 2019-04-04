import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class AddTodo extends Component {
  render() {
    return (
      <form action="" style={{ padding: "20px" }}>
        <TextField
          id="outlined-name"
          label="Add Todo"
          margin="normal"
          variant="outlined"
        />
        <br />
        <Button type="submit" value="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default AddTodo
