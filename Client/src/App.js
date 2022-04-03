import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Survey from './pages/Survey';
import Landing from './pages/Landing';
import Solution from './pages/Solution';
import History from './pages/History';

import Navbar from './components/Navbar'

function App() {
    return (
        <>
        <Navbar />
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/survey' element={<Survey />} />
                <Route path ='/solution' element={<Solution/>} />
                <Route path ='/history' element={<History/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;