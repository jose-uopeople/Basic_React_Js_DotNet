import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import WeatherForecastPage from './components/WeatherForecastPage';

function App() {

    return (
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link><br />
                <Link to="/about">About</Link><br />
                <Link to="/weatherforecastpage">Weather Forecast</Link><br />
            </div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/weatherforecastpage" element={<WeatherForecastPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App