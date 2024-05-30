import { useState } from "react";

function Counter() {
  // This won't re-render on updation.
  //   let count = 0;

  function incCount() {
    //Direct call to the Updater Function
    setCount(count + 1); //setCount is an updater fxn that is called
    console.log(count + 1);


    //Callback in updater function
    // setCount((currCount)=>{
    //   return currCount + 1;
    // })
    // setCount((currCount)=>{
    //   return currCount + 1;
    // })
    // console.log(count);
    
  }

  //So we use useState hooks:
  //let arr = useState(0); // If you will pass 10 then at initial state 10 will be passed.
  //let [stateVariable, setStatevariable] = useState(11); //actual format

  let [count, setCount] = useState(0);

  console.log();
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
