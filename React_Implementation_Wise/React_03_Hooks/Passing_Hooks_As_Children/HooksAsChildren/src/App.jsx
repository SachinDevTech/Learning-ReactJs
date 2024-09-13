import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      {/* Passing 'name' as a regular prop to the Card component */}
      <Card name="SACHIN KUMAR" />

      {/* Here we are passing JSX content (h1, p) as 'children' props to the Card component.
          Anything inside the opening and closing Card tags will be passed as 'props.children'
          and rendered in the Card component. */}
      <Card>
        <h1>I am inside Card Component and rendering as a child prop in Card.jsx</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, asperiores?</p>
      </Card>
    </>
  )
}

export default App
