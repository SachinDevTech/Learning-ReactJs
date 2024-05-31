import { useState } from "react";

function LudoBoard() {
  let [moves, setMoves] = useState({ Blue: 0, Green: 0, Red: 0, Yellow: 0 });
  let UpdateBlue = () => {
    moves.Blue += 1;
    console.log(`Blue is Updated: ${moves.Blue}`);
    setMoves({ ...moves });
  };
  let UpdateRed = () => {
    moves.Red += 1;
    console.log(`Red is Updated: ${moves.Red}`);
    setMoves({ ...moves });
  };

  let UpdateGreen = () => {
    moves.Green += 1;
    console.log(`Green is Updated: ${moves.Green}`);
    setMoves({ ...moves });
  };

  let UpdateYellow = () => {
    moves.Yellow += 1;
    console.log(`Yellow is Updated: ${moves.Yellow}`);
    setMoves({ ...moves });
  };

  return (
    <>
      <div>
        <p>Game Begins!</p>

        <div className="LudoBoards">
          <p>Blue Moves = {moves.Blue}</p>
          <button style={{ backgroundColor: "Blue" }} onClick={UpdateBlue}>
            +1
          </button>{" "}
          <p>Red Moves = {moves.Red}</p>
          <button onClick={UpdateRed} style={{ backgroundColor: "Red" }}>
            +1
          </button>{" "}
          <p>Green Moves = {moves.Green}</p>
          <button onClick={UpdateGreen} style={{ backgroundColor: "Green" }}>
            +1
          </button>{" "}
          <p>Yellow Moves = {moves.Yellow}</p>
          <button onClick={UpdateYellow} style={{ backgroundColor: "Yellow" }}>
            +1
          </button>
        </div>
      </div>
    </>
  );
}

export { LudoBoard };





// Note:

// In React, the setState function triggers a re-render. If you pass the same object (even if modified) to setState, React may not detect any changes because it checks the reference to the object, not its contents. By using the spread operator, you create a new object, ensuring that React notices the change and re-renders the component.


// The optimized one for this LudoBoard is:


/*

import { useState } from "react";

function LudoBoard() {
  const [moves, setMoves] = useState({ Blue: 0, Green: 0, Red: 0, Yellow: 0 });

  const updateMove = (color) => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      [color]: prevMoves[color] + 1
    }));
    console.log(`${color} is Updated: ${moves[color] + 1}`);
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="LudoBoards">
        <p>Blue Moves = {moves.Blue}</p>
        <button style={{ backgroundColor: "Blue" }} onClick={() => updateMove("Blue")}>
          +1
        </button>
        <p>Red Moves = {moves.Red}</p>
        <button onClick={() => updateMove("Red")} style={{ backgroundColor: "Red" }}>
          +1
        </button>
        <p>Green Moves = {moves.Green}</p>
        <button onClick={() => updateMove("Green")} style={{ backgroundColor: "Green" }}>
          +1
        </button>
        <p>Yellow Moves = {moves.Yellow}</p>
        <button onClick={() => updateMove("Yellow")} style={{ backgroundColor: "Yellow" }}>
          +1
        </button>
      </div>
    </div>
  );
}

export { LudoBoard };


*/