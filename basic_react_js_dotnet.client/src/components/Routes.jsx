import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import Authenticated from '../components/Authenticated';

import About from '../components/About';
import WeatherForecastPage from '../components/WeatherForecastPage';
import Loading from '../components/Loading';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path='/callback' element={<LoginCallback loadingElement={<Loading />} />} />
            <Route path='/weatherforecastpage' element={<Authenticated success={<WeatherForecastPage />} />} />
        </Routes>
    );
};

export default AppRoutes;