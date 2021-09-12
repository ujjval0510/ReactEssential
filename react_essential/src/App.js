import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home, Events, About, Contact, Whoop404,
  CompanyHistory, CompanyLocation, Services
} from './pages';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/event" element={<Events />}></Route>

        <Route path="/about" element={<About />}>
          <Route path="service" element={<Services />}></Route>
          <Route path="companyhistory" element={<CompanyHistory />}></Route>
          <Route path="companylocation" element={<CompanyLocation />}></Route>
        </Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Whoop404 />}></Route>
      </Routes>
    </div>
  )

}

export default App;
