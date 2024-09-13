import { useState } from "react";

function Counter() {
  // Declare a state variable 'count' initialized to 0, and a function 'setCount' to update it.
  const [count, setCount] = useState(0);

  // Function to increment the count
  function incCount() {
    // Update the count directly by adding 1
    setCount(count + 1);
    console.log(`Direct update: ${count + 1}`);

    // Alternatively, using the updater function pattern with a callback.
    // This approach is useful when the new state depends on the previous state.
    // Here, two consecutive updates are made. The state will update twice
    // leading to increments of +2 each time this function is called.

    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // console.log(`Callback update: ${count}`);
  }

  return (
    <>
      <div>
        <h1>States in React</h1>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase Count</button>
      </div>
    </>
  );
}

export { Counter };
