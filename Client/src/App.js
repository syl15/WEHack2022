import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

<<<<<<< HEAD
import Survey from './pages/Survey/Survey';
import Landing from './pages/Landing';


function App() {
    return (
        <div>
        <Survey />
        </div>
        
    )
=======
import Survey from './pages/Survey';
import Landing from './pages/Landing';
import Solution from './pages/Solution';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/survey' element={<Survey />} />
                <Route path ='/solution' element={<Solution/>} />
            </Routes>
        </Router>
    );
>>>>>>> 8bf86d1c4c6b57230e3ac6720e8c5e3a2996b60b
}

export default App;