import React, { useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {HomePage} from './pages/HomePage';
import {LoginPage} from './pages/LoginPage';
import { RequireAuth } from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';


import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <AuthProvider>
     <div className="App"> 
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }/>
        </Routes>
        </div>
      </AuthProvider> 
    </BrowserRouter>
  );
}

export default App;
