import React from 'react';
<<<<<<< HEAD
import Solution from './pages/Solution';
=======
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 84811b22b26e0cfb7c5a1579324b5af1a12d1e70

import Survey from './pages/Survey';
import Landing from './pages/Landing';

function App() {
    return (
<<<<<<< HEAD
        <Solution />
    )
=======
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/survey' element={<Survey />} />
            </Routes>
        </Router>
    );
>>>>>>> 84811b22b26e0cfb7c5a1579324b5af1a12d1e70
}

export default App;