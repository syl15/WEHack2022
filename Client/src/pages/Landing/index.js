import React from "react";
import ReactDOM from 'react-dom';
import './styles.css';

import car from './toyota.png';
import beetle from './car.png';
import wheel from './wheel.png';

// put classes in quotes 

function Landing() {
    return (
        <div className ="landing">
            <ul>
            <li><a href="">History</a></li>
            <li><a href="/survey">Survey</a></li>
            {/* <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Survey</a>
                <div class="dropdown-content">
                <a href="/survey">Take New Survey</a>
                <a href="">View Old Surveys</a>
                </div>
            </li> */}
            <li><a href="/">Home</a></li>
            </ul>
            <div id = "main">
                <img src={car} id="car_img" />
                <div className = "title">
                    <h1>Translution</h1>
                </div>
                <div>
                    <div id="description">
                        <p>
                        Translution is a wholistic platform for assessing transportation needs.
                        With our service, you can keep track of your transportation usage and use
                        this to better fit your <i>transportation style</i> to your <i>lifestyle</i>.
                        </p>
                        
                        <p>
                            Take us for a spin, and find out what Translution can do for you!
                        </p>
                    
                        <div id="signature">- Allison, Christine, Leia, Stephanie</div>

                        <img id="wheel" src={wheel} />
                        <img id="beetle" src={beetle} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Landing;