import React, { useState } from 'react';

function App() {
  
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');


  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

 
  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  return (
    <div>
      <h1>React Hooks </h1>
      <div>
        <label>Input 1:</label>
        <input type="text" value={input1Value} onChange={handleInput1Change} />
      </div>
      <div>
        <label>Input 2:</label>
        <input type="text" value={input2Value} onChange={handleInput2Change} />
      </div>
      <div>
        <p>Value of Input 1: {input1Value}</p>
        <p>Value of Input 2: {input2Value}</p>
      </div>
    </div>
  );
}

export default App;
