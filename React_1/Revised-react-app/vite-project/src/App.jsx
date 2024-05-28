import "./App.css";

//Importing the components
import {Title, GoodBye, Calc} from "./NewComponents.jsx"

function App() {
  return (
    <div>
      <h1>Hellow, Dear!</h1>
      <Title /> {/*Method to render the component. i.e. <AnyComponentName/> */}
      <GoodBye />
      <Calc/>
    </div>
  );
}



//Note: Always keep function/component's name in PascalCase notation.

export default App; //this is default export method
