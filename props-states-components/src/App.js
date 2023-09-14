import React, { useState, Component } from 'react';
import './App.css';

// Functional Component
function DateDisplayFunctional(props) {
  return (
    <div>
      <p>Date: {props.currentDate.toLocaleDateString()}</p>
      <p>Time: {props.currentDate.toLocaleTimeString()}</p>
    </div>
  );
}

// Class Component
class DateDisplayClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontFamily: 'Arial',
      color: 'black',
    };
  }

  handleButtonClick = () => {
    // Change font and color on button click
    this.setState({
      fontFamily: 'Poppins',
      color: 'red',
    });
  };

  render() {
    return (
      <div style={{ fontFamily: this.state.fontFamily, color: this.state.color }}>
        <p>Date: {this.props.currentDate.toLocaleDateString()}</p>
        <p>Time: {this.props.currentDate.toLocaleTimeString()}</p>
        <button onClick={this.handleButtonClick}>Change Font & Color</button>
      </div>
    );
  }
}

function App() {
  const currentDate = new Date();

  return (
    <div className="App">
      <h1>Functional Component:</h1>
      <DateDisplayFunctional currentDate={currentDate} />

      <h1>Class Component:</h1>
      <DateDisplayClass currentDate={currentDate} />
    </div>
  );
}

export default App;
