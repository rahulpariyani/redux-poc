import React, { Component } from "react";
import classes from "./todo.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";
import {
  a__todo_add,
  a__todo_delete,
  a__todo_toggle,
} from "../../actions/todo.action";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
class Todo extends Component {
  state = {
    newTodo: "",
  };
  render() {
    this.addTodoHandler = () => {
      this.state.newTodo &&
        this.props.addTodo({
          name: this.state.newTodo,
          isCompleted: false,
        });
      this.setState({ newTodo: "" });
    };
    this.deleteTodoHandler = (deleteIndex) => {
      this.props.deleteTodo({ index: deleteIndex });
    };
    this.toggleTodoHandler = (e, index) => {
      let payload = { index: index, isCompleted: e.target.checked };
      this.props.toggleTodo(payload);
    };
    this.inputHandler = (e) => {
      this.setState({ newTodo: e.target.value });
    };

    this.renderTodos = () => (
      <div className={classes.todoContainer}>
        {this.props.Todo.length ? (
          this.props.Todo.map((todo, index) => (
            <div className={classes.todo} key={index}>
              <div>
                <input
                  type="checkbox"
                  className={classes.checkbox}
                  checked={todo.isCompleted}
                  onChange={(e, i) => this.toggleTodoHandler(e, index)}
                />
                <span>{todo.name}</span>
              </div>
              <img
                src={DeleteIcon}
                alt="delete-icon"
                onClick={() => this.deleteTodoHandler(index)}
              />
            </div>
          ))
        ) : (
          <h1>Please Add Something... </h1>
        )}
      </div>
    );
    return (
      <section>
        <h1 className={classes.title}>Todo</h1>
        <Input
          placeholder="Enter Something "
          value={this.state.newTodo}
          onChange={this.inputHandler}
        />
        <Button onClick={this.addTodoHandler}>add</Button>
        {this.renderTodos()}
        {/* {this.props.Todo.length ? (
          this.renderTodos()
        ) : (
          <h1>Please Add Something... </h1>
        )} */}
      </section>
    );
  }
}
function mapStateToProps(state) {
  return { Todo: state.Todo || [] };
}
function mapDispatchToProps(dispatch, newTodo) {
  return {
    addTodo: (payload) => dispatch(a__todo_add(payload)),
    deleteTodo: (payload) => dispatch(a__todo_delete(payload)),
    toggleTodo: (payload) => dispatch(a__todo_toggle(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
