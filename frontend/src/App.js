// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Navbar';
import Jatekok from './Jatekok/Jatekok';
import JatekTorles from './JatekTorles/JatekTorles';
import KeresNev from './JatekKereses/KeresNev';
import KeresErtekeles from './JatekKereses/KeresesErtekeles';
import JatekModositas from './JatekModositas/JatekModositas';
import JatekFelvitel from './JatekFelvitel/JatekFelvitel';


// App komponens
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Jatekok />} />
         
          <Route path="/jatekok" element={<Jatekok />} />
          <Route path="/jatekTorles" element={<JatekTorles />} />
          <Route path="/keresNev" element={<KeresNev />} />
          <Route path="/keresErtek" element={<KeresErtekeles />} />
          <Route path="/jatekFelvitel" element={<JatekFelvitel />} />
          <Route path="/jatekModositas" element={<JatekModositas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
