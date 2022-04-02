import React from "react";
import ReactDOM from 'react-dom';
import styles from './styles.css';

function Landing() {
    return (
        <div className = {styles.root}>
            <div className = {styles.image}>
                {/* add image here */}
            </div>
            <div className = {styles.body}>
                {/*  welcome */}
            </div>
        </div>

    )
}

export default Landing;