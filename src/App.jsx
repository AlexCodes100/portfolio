import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './components/pages/Education';
import Work from './components/pages/Work';
import Projects from './components/pages/Projects';

function App() {
    return (
        <>
            <Router>
                <ResponsiveAppBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/education' element={<Education />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='/projects' element={<Projects />} /> */}
                </Routes>
                {/* <Footer /> */}
            </Router>
        </>
    );
}

export default App;