function Title() {
  return (<h2 className="TitleContent">Hii, I am the Title!</h2>); //Always try to use parenthesis to be a good developer, otherwise also work fine.
}

function GoodBye() {
  return <h1 className="GoodByeContent">Okay! Good Bye Dear!</h1>; //without parenthesis will work completely fine.
}

function Calc(){
    return (<>
    <p>2*2 =  {2*2}</p>
    </>);
}

export { Title, GoodBye, Calc };
