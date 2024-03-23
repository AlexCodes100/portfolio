import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './components/pages/Education';
import Work from './components/pages/Work';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';

function App() {
    return (
        <>
            <CssBaseline />
            <Router>
                <ResponsiveAppBar />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/education' element={<Education />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='*' element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;