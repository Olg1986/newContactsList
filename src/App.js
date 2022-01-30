import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {HomePage} from './pages/HomePage';
import {LoginPage} from './pages/LoginPage';


import './App.css';

function App() {
  
  return (
    <BrowserRouter>
     <div className="App"> 
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={
            
                <HomePage/>
            
            }/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
