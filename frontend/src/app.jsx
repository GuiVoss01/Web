// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import FormPage from './pages/formPage';
import DetailPage from './pages/detailPage';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<FormPage />} />
          <Route path="/editar/:id" element={<FormPage />} />
          <Route path="/detalhes/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App; 