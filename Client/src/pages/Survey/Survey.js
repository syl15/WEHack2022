
import React from 'react';
import './survey.css';

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

  if (props.selected) {
    return (
    <button className='square test' onClick={props.onClick}>
    {props.display}
    </button>
    )
  }
  else {
    return (
    <button className="square" onClick={props.onClick}>
      {props.display} 
    </button>
    );
  }
}

class Choices extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      q1: 0,
      q2: 0,
      q3: 0,
    };
  }

  handleClick(i, q) {
    const newState = {...this.state};

    if (q == 1) { 
      newState.q1 = i;
      console.log("clicked" + newState.q1);
    }

    else if (q == 2) {
      newState.q2 = i;
      console.log("clicked" + newState.q2);
    }
    
    else {
      newState.q3 = i; 
      console.log("clicked" + newState.q3);
    }   

    this.setState(newState);
  }

  renderSquare(i, q, text) {
    var selected;
    if (q == 1) {
      selected = this.state.q1;
    }
    else if (q == 2) {
        selected = this.state.q2; 
    }
    else {
      selected = this.state.q3; 
    }
      return(
        <Square
        onClick = {() => this.handleClick(i, q)}
        display = {text}
        selected = {selected == i? true: false} />
      )
  }


  render() {
    const q1 = 'What is your monthly budget for trasnportation?';
    const q2 = 'How many miles would you need to travel per week?';
    const q3 = 'What type of location do you live in?';
    return (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        {q1}
        <div className="q1">
          {this.renderSquare(-5, 1, '$0 to $500')}
          {this.renderSquare(-3, 1, '$500 to $1000')}
          {this.renderSquare(0, 1, '$1000')}
          {this.renderSquare(3, 1, '$1001 to $1500')}
          {this.renderSquare(5, 1, '$1501+')}
        </div>
        <br/>

        {q2}
        <div className="q2">
        {this.renderSquare(-5, 2, '< 1 mile')}
          {this.renderSquare(-3, 2, '1 - 2 miles')}
          {this.renderSquare(0, 2, '2 - 5 miles')}
          {this.renderSquare(3, 2, '5 - 10 miles')}
          {this.renderSquare(5, 2, '10+ miles')}
        </div>
        <br/>

        {q3}
        <div className="q3">
          {this.renderSquare(-5, 3, 'city')}
          {this.renderSquare(0, 3, 'suburb')}
          {this.renderSquare(5, 3, 'rural')}
        </div>
        <br/>
      </div>
    );
  }
}

// class Questionnaire extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       squares: Array(5),
//       responses: Array(3).fill(null),
//     };
//   }

//   render() {

//     return (

//       <div style={{ display: 'flex', flexDirection: 'column'}}>
//         {q1} 
//         <Choices />
//         <br/>
//         {q2}
//         <Choices />
//         <br/> 
//         {q3}
//         <Choices />
//         <br/>
//         {q4}
//         <Choices />
//         <br/>
//       </div>
//     );
//   }
// }

export default Choices
