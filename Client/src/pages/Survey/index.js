
import React, { useState } from 'react';
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

function Choices({q1, q2, q3, handleInput}) {

  function renderSquare(i, q, text) {
    var selected;
    if (q == 1) {
      selected = q1;
    }
    else if (q == 2) {
        selected = q2; 
    }
    else {
      selected = q3; 
    }
      return(
        <Square
        onClick = {() => handleInput(i, q)}
        display = {text}
        selected = {selected == i? true: false} />
      )
  }

    const p1 = 'What is your monthly budget for trasnportation?';
    const p2 = 'How many miles would you need to travel per week?';
    const p3 = 'What type of location do you live in?';
    return (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3>What mode of transportation is best for me?</h3>

        {p1}
        <div className="q1">
          {renderSquare(-5, 1, '$0 to $500')}
          {renderSquare(-3, 1, '$500 to $1000')}
          {renderSquare(0, 1, '$1000')}
          {renderSquare(3, 1, '$1001 to $1500')}
          {renderSquare(5, 1, '$1501+')}
        </div>
        <br/>

        {p2}
        <div className="q2">
        {renderSquare(-5, 2, '< 1 mile')}
          {renderSquare(-3, 2, '1 - 2 miles')}
          {renderSquare(0, 2, '2 - 5 miles')}
          {renderSquare(3, 2, '5 - 10 miles')}
          {renderSquare(5, 2, '10+ miles')}
        </div>
        <br/>

        {p3}
        <div className="q3">
          {renderSquare(-5, 3, 'city')}
          {renderSquare(0, 3, 'suburb')}
          {renderSquare(5, 3, 'rural')}
        </div>
        <br/>
      </div>
    );
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
