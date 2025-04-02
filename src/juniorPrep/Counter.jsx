import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  {
    /* Possible Extension Practice #1 */
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2> Count {count} </h2>

      <button onClick={handleIncrement} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button
        onClick={handleReset}
        style={{
          marginRight: "10px",
          backgroundColor: count === 0 ? "#ccc" : "#f44336",
          cursor: count === 0 ? "not-allowed" : "pointer",
        }}
        disabled={count === 0}
      >
        Reset
      </button>

      {/* Possible Extension Practice #1 */}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
