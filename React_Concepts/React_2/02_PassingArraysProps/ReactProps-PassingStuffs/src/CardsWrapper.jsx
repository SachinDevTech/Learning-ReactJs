import { ProductCart } from "./Card";

function CardWrapper() {
    let arrOptions = ["SKY", "RKM", "HRY"];
    let obj = {
        a: "Samsung",
        b: "Apple",
        c: "Dell"
    };
  return (
    <>
      <ProductCart  title="Phone" price={32500} name={arrOptions[0]} brandname={obj.a}/>
      <ProductCart title="Tab" price={40000} name={arrOptions[1]} brandname={obj.b}/>
      <ProductCart title="Laptop" price={60000} name={arrOptions[2]} brandname={obj.c}/>
      
    </>
  );
}

export { CardWrapper };
