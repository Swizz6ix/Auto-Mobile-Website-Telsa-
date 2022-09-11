import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Model3 from './models/Model3';
import ModelX from './models/ModelX';
import ModelY from './models/ModelY';
import ModelS from './models/ModelS';
import SolarRoof from './models/SolarRoof';
import SolarPanel from './models/SolarPanel';
import WhiteHeader from './components/WhiteHeader';
import { Route, Routes } from 'react-router-dom';
import HomeFront from './containers/HomeFront';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/models" element={<><ModelS /></>} />
        <Route path="/model3" element={<><Model3 /></>} />
        <Route path="/modelx" element={<><ModelX /></>} />
        <Route path="/modely" element={<><ModelY /></>} />
        <Route path="/solarroof" element={<><SolarRoof /></>} />
        <Route path="/solarpanels" element={<><SolarPanel /></>} />
        <Route path="/" element={<><HomeFront /></>} />
      </Routes>
        <WhiteHeader />
    </div>
  );
}

export default App;
