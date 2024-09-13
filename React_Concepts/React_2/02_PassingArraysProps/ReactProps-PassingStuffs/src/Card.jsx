import "./Card.css";

function ProductCart({ title, price, name, brandname }) {
  return (
    <>
      <div className="cardStyle">
        <h2>ProductName {title}</h2>
        <p>
          Brand Name is: {brandname}
        </p>

        <h3>Price: {price}</h3>
        <h3>{price >= 40000 ? <p>Discount of 10% on this product: {price - (price * 10)/100}</p> : null}</h3>
        <button>{name}</button>
      </div>
    </>
  );
}

export { ProductCart };
