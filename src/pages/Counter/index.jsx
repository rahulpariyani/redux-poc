import React from "react";
import classes from "./counter.module.css";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { s__counter } from "../../reducers/counter.slice";
const Counter = () => {
  const Counter = useSelector((state) => state.Counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(s__counter.actions.increment());
  };
  const decrementHandler = () => {
    dispatch(s__counter.actions.decrement());
  };
  const incrementBy5Handler = () => {
    dispatch(s__counter.actions.increment_by_value(5));
  };
  const decrementBy5Handler = () => {
    dispatch(s__counter.actions.decrement_by_value(5));
  };

  return (
    <section>
      <h1 className={classes.title}>Counter</h1>
      <div className={classes.value}>VALUE : {Counter}</div>
      <div>
        <Button onClick={incrementHandler}>+ 1</Button>
        <Button onClick={decrementHandler}>- 1</Button>
      </div>
      <div>
        <Button onClick={incrementBy5Handler}>+ 5</Button>
        <Button onClick={decrementBy5Handler}>- 5</Button>
      </div>
    </section>
  );
};

export default Counter;
