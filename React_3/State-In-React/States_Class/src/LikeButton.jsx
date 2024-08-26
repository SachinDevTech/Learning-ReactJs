import { useState } from "react";

function LikeButton() {
  // State to track if the button is liked or not, initialized to false.
  const [isLiked, setLiked] = useState(false);

  // State to track the number of times the button has been clicked, initialized to 0.
  const [clicks, setClicks] = useState(0);

  // Style for the heart icon when it is in a liked state.
  const likeStyle = { color: "red" };

  // Function to toggle the 'liked' state and increment the click count.
  const toggleLike = () => {
    setLiked((prevIsLiked) => !prevIsLiked); // Toggle the 'liked' state.
    setClicks((prevClicks) => prevClicks + 1); // Increment the click count.
    console.log("Toggled!");
  };

  return (
    <>
      {/* Display the number of times the button has been clicked */}
      <h2>You clicked: {clicks} times.</h2>

      {/* The heart icon changes based on the 'isLiked' state */}
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
