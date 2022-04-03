import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
}

export default App;