import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {HomePage} from './pages/home/HomePage';
import {LoginPage} from './pages/loginPage/LoginPage';
import { RequireAuth } from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';

import './App.css';

function App() {
  
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
