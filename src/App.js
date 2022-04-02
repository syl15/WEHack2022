import React from "react"
import ReactDOM from 'react-dom'

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
      {props.value}
    </button>
  );
}

class Choices extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      squares: Array(5).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares(); 
    squares[i] = 'X';
    this.setState({
      squares: squares,
    });
    return;
  }

  renderSquare(i) {
    return (
      <Square
      value = {this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="choices-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
      </div>
    );
  }
}

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      squares: Array(5).fill(null),
    };
  }

  render() {
    return (
      <div>
        I often travel with many items and will need lots of storage space. 
        <Choices /> 
        I prefer a mode of transportation that is fast
        <Choices />
        I prefer a mode of transportation that is reliable
        <Choices />
      </div>
    );
  }
}
export default Questionnaire
