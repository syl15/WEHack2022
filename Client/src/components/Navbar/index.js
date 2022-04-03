import React from 'react';
import './styles.css';

function Navbar() {
    return (
        <ul>
            <li><a href="/history">History</a></li>
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
    )
}

export default Navbar;