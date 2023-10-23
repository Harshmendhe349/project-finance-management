// App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/loginPage/login'; 
import ViewExpenses from './components/viewExpenses/viewExpenses'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/viewexpenses" element={<ViewExpenses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
