import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div style={{ textAlign: "center", padding: "20%" }}>
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>DEC</button>
        <button onClick={() => setCount(count + 1)}>INC</button>
      </div>
    </div>
  );
};

export default Counter;
