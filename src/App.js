import classes from "./App.module.css";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
function App() {
  return (
    <main className={classes.main}>
      <Todo />
      <Counter />
    </main>
  );
}

export default App;
