import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [errorText, setErrorText] = useState("");

  const increaseCount = useCallback(() => {
    setErrorText("");
    setCount((prev) => prev + 1);
  }, [count]);

  const decreaseCount = useCallback(() => {
    if (count === 0) {
      setErrorText("Can not go below 0");
      return;
    }
    setCount((prev) => prev - 1);
  }, [count]);
  return (
    <div className="App">
      <div className="timer">
        <button onClick={decreaseCount}>-</button>
        <div>{count}</div>
        <button onClick={increaseCount}>+</button>
      </div>
      {errorText ? <p>{errorText}</p> : null}
    </div>
  );
}

export default App;
