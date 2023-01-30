import logo from './logo.svg';
import './App.css';

import { Home } from './Home';
import { Department } from './Department';
import { Employee } from './Employee';
import { Navigation } from './Navigation';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Misyon } from './Misyon';
import { Iletisim } from './Iletisim';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center ">
          Furkan SCOUTING Melih
        </h3>
        
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/department' element={<Department />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/misyonumuz' element={<Misyon />} />
          <Route path='/iletisim' element={<Iletisim />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
