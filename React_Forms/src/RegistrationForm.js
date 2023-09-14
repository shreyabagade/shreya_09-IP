// src/RegistrationForm.js
import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: 'male',
      message: '',
      agree: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Build the message with form data
    const message = `
      Name: ${this.state.name}
      Email: ${this.state.email}
      Gender: ${this.state.gender}
      About You: ${this.state.message}
      Agree to terms: ${this.state.agree ? 'Yes' : 'No'}
    `;

    // Display the message in an alert box
    alert(message);
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      gender: 'male',
      message: '',
      agree: false,
    });
  };

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
        
          />
        </div>
        <br></br>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleInputChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <br></br>
        <div>
          <label>About you:</label>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <br></br>
        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={this.state.agree}
              onChange={this.handleInputChange}
            />{' '}
            Are you a student?
          </label>
        </div>
        <br></br>
        <div>
          <input type="submit" value="Submit" onClick={this.handleButtonClick} />
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
