import ReactProps from "./01_ReactProps";
import ProductTab from "./02_ProductTab";
import MsgBox from "./03_MsgBox"
function App() {
  // return <ReactProps />;
  //return <ProductTab />
  return (
    <>
      <ReactProps />
      <ProductTab />
      <MsgBox username="Sachin | Gaurav Yadav" textColor="red" />
    </>
  );
}

export default App;
