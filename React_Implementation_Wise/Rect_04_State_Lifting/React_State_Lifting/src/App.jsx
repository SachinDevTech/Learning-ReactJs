import Card from './components/Card';
import './App.css';
import { useState } from 'react';

function App() {
  // State in parent component
  const [name, setName] = useState(''); // Initial state

  return (
    <div>
      <h1>State Lifting:</h1>
      {/* Pass name and setName as props to the child component */}
      <Card name={name} setName={setName} />
      <p>I am inside parent: {name}</p>
    </div>
  );
}

export default App;
