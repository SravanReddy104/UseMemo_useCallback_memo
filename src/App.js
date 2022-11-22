import { useCallback, useMemo, useState } from "react";
import Todos from "./Todos";
import "./styles.css";

export default function App() {
  const [num, setnum] = useState(0);
  const [count, setcount] = useState(10);
  const [todos, settodos] = useState(["todos"]);

  const handleTodos = useCallback(() => {
    settodos([...todos, "todo"]);
  }, [todos]);

  const expensiveFunction = (count) => {
    console.count("in expensive");
    var sum = 0;
    for (var i = 0; i < count; i++) {
      console.count("in expensive");
      sum += i;
    }
    return sum;
  };
  const value = useMemo(() => expensiveFunction(count), [count]);
  const handleNum = () => {
    setnum((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={handleNum}>{num} +</button>
      <h1>Todos adding</h1>
      <Todos handleTodos={handleTodos} List={todos} />
      <h2>Expensive function</h2>
      {value}
    </>
  );
}
