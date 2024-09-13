// import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container">
      <h2 id="usr-name">{props.myName}</h2>
      <img id="usr-img" src={props.img} alt="anyImage" />
      <p id="usr-desc">
        {props.desc}
      </p>
    </div>
  );
}

export default UserCard;
