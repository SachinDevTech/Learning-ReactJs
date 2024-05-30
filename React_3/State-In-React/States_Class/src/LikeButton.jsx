import { useState } from "react";

function LikeButton() {
  // This state can only be used inside the component function not outside.
  let [isLiked, setLiked] = useState();
  let [clicks, setClicks] = useState(0);

  let likeStyle = { color: "red" }; //Style for the like button when clicked.
  let toggleLike = () => {
    setLiked(!isLiked);
    setClicks(clicks + 1);
    console.log("Toggled!");
  };
  console.log();
  return (
    <>
      <h2>You clicked : {clicks} times.</h2>
      <span onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </span>
    </>
  );
}

export { LikeButton };
