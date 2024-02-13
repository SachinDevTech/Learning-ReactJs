import Gadgetcard from "./GadgetCard";

function Gadget() {
  return (
    <>
      <Gadgetcard title = "Mobile" price = "45k"/>
      <Gadgetcard title = "Tablet" price = "80k"/>
      <Gadgetcard title = "Laptop" price = "150k"/> 
      {/* If you wanna write price in integer form then you can't directly write as: price = 320000. To handle that situation we use:  */}
      <Gadgetcard title = "Vision Pro" price = {320000}/> 
    </>
  );
}

export default Gadget;
