import "./HandlingClickEvents.css"

//These are supporting functions are used to create events.
function Greet() {
    console.log("Hellow! Good Morning Sachin.");
}

function sayBye() {
    console.log("Hey! Bye Sachin.");
}


//Main function that will be embedded into the App.jsx  as import {HandlingEvents} from "./HandlingEvents"
function HandlingClickEvents() {
    return (
        <>
        <div>
            <button onClick={Greet}>Click Me!</button>
            <p className="para-click-event" onClick={sayBye}>Lorem ipsum dolor sit amet.</p>
        </div>
        </>
    );
}

export {HandlingClickEvents}