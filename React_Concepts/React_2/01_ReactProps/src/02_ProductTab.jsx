import Product from "./02_Product";

function ProductTab() {
  let options = ["Hi-Tech", "Durable", "Fast"];
  return (
    <>
      <Product title="Phone" price={30000} features={options} />
      <Product title="Tablet" price={50000} />
      <Product title="Laptop" price={80000} />
    </>
  );
}
export default ProductTab;
