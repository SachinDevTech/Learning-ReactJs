// import ReactProps from "./01_ReactProps";
import ProductTab from "./02_ProductTab";
import MsgBox from "./03_MsgBox";
function App() {
  // return <ReactProps />;
  //return <ProductTab />
  return (
    <>
      <ProductTab />
      <MsgBox username="Sachin Kumar" textColor="red" />
    </>
  );
}

export default App;
