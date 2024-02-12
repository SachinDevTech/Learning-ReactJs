import "./Card.css"; // Import the CSS file

function Card() {
  return (
    <div className="card-css">
        <h2>This is the First card that <a href="#">CodeCurrents</a> made using react.</h2>
      <img
        src="https://images.unsplash.com/photo-1583144568008-76743354fa5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Dark-Image"
      />
      <h3>Image Has Some Meaning</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        enim incidunt alias.
      </p>
    </div>
  );
}

export default Card;
