import classes from "./App.module.css";
import Todo from "./pages/Todo";
function App() {
  return (
    <main className={classes.main}>
      <Todo />
    </main>
  );
}

export default App;
