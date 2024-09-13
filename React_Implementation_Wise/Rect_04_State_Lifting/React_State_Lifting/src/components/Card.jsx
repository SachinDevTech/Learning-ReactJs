const Card = (props) => {
    return (
      <div>
        <input type="text" placeholder="Enter Text..." onChange={(e) => {
          props.setName(e.target.value) // Use setName from props to update the state in parent
        }} />
  
        <h2>Values entered in Card Component first go in app.jsx and set to the variable state: {props.name}</h2>
      </div>
    )
  }
  
  export default Card;
  