import "./App.css";
import GreetWorld from "./GreetWorld.jsx";
import AboutMe from "./aboutMe.jsx";
function App() {
  //Ways to display components:
  // _____________________________________________________________________________________
  // return <h1>Hello World!</h1>; //1. Here you can't return multiple stuffs only one html statement will be render. So,
  // _______________________________________________________________________________________
  // return <Greet />; //2. We are returning component named Greet, One more Way is their:
  // _____________________________________________________________________________________

  return (//We are using fragments to make it more optimal way of rendering multiple components.
    <> 
      <GreetWorld />
      <AboutMe />
    </>
  );
}

export default App;
