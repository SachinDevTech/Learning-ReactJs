function Product({ title, price, features }) {
  console.log(features);
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>Price is: {price}</h5>
      <p>{features}</p>
    </div>
  );
}
export default Product;
