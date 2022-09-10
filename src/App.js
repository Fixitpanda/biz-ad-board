import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';




function App() {
    return (
        <>
            <Header name="BizAds - Board" />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
            </Routes>
            <ScrollToTop/>
            <Footer/>
        </>
    );
}

export default App;
