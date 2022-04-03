import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Survey from './pages/Survey';
import Landing from './pages/Landing';
import Solution from './pages/Solution';
import History from './pages/History';
import AltSurvey from './pages/AltSurvey';
import CarSurvey from './pages/CarSurvey';
import Navbar from './components/Navbar';

function App() {
    const [q1, setQ1] = useState(0);
    const [q2, setQ2] = useState(0);
    const [q3, setQ3] = useState(0); 

        
    function handleClick(i, q) {
        if (q == 1) { 
        setQ1(i);
        }

        else if (q == 2) {
        setQ2(i);
        }
        
        else {
        setQ3(i);
        }   
    }
    return (
        <>
        <Navbar />
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/survey' element={<Survey 
                    handleInput={(i,q) => handleClick(i,q)}
                    q1={q1}
                    q2={q2}
                    q3={q3}
                />} />
                <Route path ='/solution' element={<Solution
                    q1={q1}
                />} />
                <Route path ='/history' element={<History/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;