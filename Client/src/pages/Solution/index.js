import React from "react";
import ReactDOM from 'react-dom';
import './style.css';

function Solution()
{
    const q1 = 5;
    const q2 = 5;
    const q3 = 5;
    const q4 = 5;
    const q5 = 1;
    const q6 = 1;
    const q7 = 1;
    const q8 = 1;
    const bool = true;
    const totalCarScore = q4 + q5 + q6 + q7; 
    const myInt = 8 ;

    if (bool && totalCarScore >= 4 && totalCarScore <=8 ){ //car
      // car
      return(
        <h>car</h>
      )
    }

    if (bool && totalCarScore >= 9 && totalCarScore <= 12 ){ //car
      // minivan
      return (
      <h>minivan</h>)
    }

    if (bool && totalCarScore >= 13 && totalCarScore <= 16 ){ //car
      // SUV
      return(<h>SUV</h>
      )
    }

    if (bool && totalCarScore >= 17 && totalCarScore <= 20 ){ //car
      // truck
      return(<h>truck</h>)
    }

    //if (!bool){ //non-car

    //}



    return (
    <div>
        <h>Your "translution" is:</h>
        <h>  </h>

    </div>
    )
}
export default Solution;