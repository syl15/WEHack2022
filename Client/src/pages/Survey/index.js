import React from "react";
import ReactDOM from 'react-dom';
import './styles.css';

/*
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {    //represents a react component named app
  const name = 'Peter'
  const age = 10
  
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="George" age ={26+10}/>
    <Hello name={name} age={age}/>
  </div>
  )
}
export default App
*/
function Square(props) {
  
  return (
    <button className="square" onClick={props.onClick}>
      {props.display} 
    </button>
  );
}

class Choices extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      squares: Array(5)
    };
  }

  handleClick(i) {
    const squares = this.state.squares(); 
    this.setState({
      squares: squares,
    });
    return;
  }

  renderSquare(i, text) {
    return (
      <Square
      onClick = {() => this.handleClick(i)}
      display = {text}
      
      />
    );
  }
  render() {
    return (
      <div>
        <div className="choices-row">
          {this.renderSquare(0, 'Strongly disagree')}
          {this.renderSquare(1, 'Disagree')}
          {this.renderSquare(2, 'Neutral')}
          {this.renderSquare(3, 'Agree')}
          {this.renderSquare(4, 'Strongly agree')}
        </div>
      </div>
    );
  }
}

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      squares: Array(5),
      responses: Array(3).fill(null),
    };
  }

  render() {
    const q1 = 'I bring a lot of things around and need storage space.';
    const q2 = '\nsecond question\n';
    const q3 = '\nthird question\n';
    const q4 = '\nfourth question\n';
    return (

      <div style={{ display: 'flex', flexDirection: 'column'}}>
        {q1} 
        <Choices />
        {q2}
        <Choices /> 
        {q3}
        <Choices />
        {q4}
        <Choices />
      </div>
    );
  }
}
export default Questionnaire
