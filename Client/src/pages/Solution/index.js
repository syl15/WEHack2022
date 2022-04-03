import React from "react";
import ReactDOM from 'react-dom';
import './styles.css';

function Solution()
{
    const q1 = 1; //sidewalks OR people
    const q2 = 1; //distance OR cargo
    const q3 = 1; //public transport OR electic
    const q4 = 1; //safety OR  
    const bool = true;
    var outcome = "outcome";
    var explanation = "explanation";
   

    if (bool){ 

        if (q2<3 && q4>3 && q1>=3) //distance short, safety high, sidewalks good
        {
            outcome="Walk or Bike";
            explanation="You don't need to go very far on a daily basis, your area is pretty safe, and your sidewalks are in good condition. You should take advantadge of this to walk or bike for transportation!";
        }
        else //distance long
        {
            if (q3>3) {
                outcome = "Public Transportation";
                
                explanation = "Considering you need to travel long distances, live in an unsafe area, or have bade sidewalks, we've ruled out walking or biking. Luckily you're near a good public transportation system, so you should take advantadge of that!";
            }
            else{
                outcome = "RideShare App"; 
             explanation = "Considering your monthly budget, miles per week, and location, we suggest using rideshare! ";

            }
        }
    }
    else{
        if ( q1>3) outcome = "Minivan";
        else if (q2>3) outcome = "Truck";
        else if( q3>3) outcome = "Electric Car";
        else outcome = "Hybrid";
    }



    return (
    <div className="body">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Your "translution" is:</h1>
        <h2> {outcome}  </h2>
        <p> {explanation} </p>
        
            <button onclick="window.location.href='https://www.lyft.com/';">
            Find out More!</button>
        

    </div>
    )
}
export default Solution;