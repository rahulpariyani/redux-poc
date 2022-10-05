import React, { Component } from "react";
import classes from "./todo.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";
import { s__todo,fetchDummyTodos } from "../../store/slice/todo.slice";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
class Todo extends Component {
  state = {
    newTodo: "",
  };
  render() {
    this.addTodoHandler = () => {
      this.state.newTodo &&
        this.props.addTodo({
          title: this.state.newTodo,
          completed: false,
        });
      this.setState({ newTodo: "" });
    };
    this.deleteTodoHandler = (deleteIndex) => {
      this.props.deleteTodo({ index: deleteIndex });
    };
    this.toggleTodoHandler = (e, index) => {
      let payload = { index: index, completed: e.target.checked };
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
                  checked={todo.completed}
                  onChange={(e, i) => this.toggleTodoHandler(e, index)}
                />
                <span>{todo.title}</span>
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
        <Button onClick={()=>this.props.fetchDummyTodos()}>fetch dummy todos</Button>
        {this.renderTodos()}
      </section>
    );
  }
}
function mapStateToProps(state) {
  return { Todo: state.Todo || [] };
}
function mapDispatchToProps(dispatch, newTodo) {
  return {
    addTodo: (payload) => dispatch(s__todo.actions.todo_add(payload)),
    deleteTodo: (payload) => dispatch(s__todo.actions.todo_delete(payload)),
    toggleTodo: (payload) => dispatch(s__todo.actions.todo_toggle(payload)),
    fetchDummyTodos: (payload) => dispatch(fetchDummyTodos(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
