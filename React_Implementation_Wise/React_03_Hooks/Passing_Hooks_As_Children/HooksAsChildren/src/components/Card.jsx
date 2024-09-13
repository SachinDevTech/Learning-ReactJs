const Card = (props) => {
  return (
    <div>
      {/* Accessing the 'name' prop passed from the parent component (App.jsx) */}
      <h1>{props.name}</h1>

      {/* Accessing and rendering anything passed between the opening and closing Card tags 
          from the parent component (App.jsx) as 'children'. */}
      <div>{props.children}</div>
    </div>
  )
}

export default Card