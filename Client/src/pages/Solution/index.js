import React from "react";
import ReactDOM from 'react-dom';
import './styles.css';

function Solution()
{
    const q1 = 8; //sidewalks
    const q2 = 8; //distance DONE
    const q3 = 8; //public transport DONE
    const q4 = 8; //safety
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
             explanation = "Considering you need to travel long distances, live in an unsafe area, or have bade sidewalks, we've ruled out walking or biking. You also don't live near a good public transportation system, so you should rely on rideshare, like Uber or Lyft!";

            }
        }
    }

    return (
    <div>
        <h1>Your "translution" is:</h1>
        <h2> {outcome}  </h2>
        <p> {explanation} </p>

    </div>
    )
}
export default Solution;