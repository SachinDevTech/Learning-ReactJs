function sayHii() {
    console.log("Hii!");
}

function sayGoodBye() {
    console.log("GoodBye!");
    
}
function sayDoubleclickMe() {
    console.log("Double CLicked!");
}

function HandlingNonClickEvents() {
    return(
        <>
        <div>
            <button onClick={sayHii}>Click Me!</button>

            {/* Creating a non click event onMouseMove will count the number and console the output */}

            <p onMouseMove={sayGoodBye}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus facere nemo vitae ut? Aliquid laborum natus deleniti voluptatibus ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, accusantium? Voluptates iusto in dolorem vel labore reiciendis maiores corporis nemo!</p>

            <button onDoubleClick={sayDoubleclickMe}>Double CLick ME!</button>
        </div>
        </>
    );
}

export {HandlingNonClickEvents}