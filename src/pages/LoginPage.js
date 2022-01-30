import React, { useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../hock/useAuth';


export const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {singin} = useAuth();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const fromPage = location.state?.from?.pathname || '/';
    
    const handleSubmit = () => {
        const user = {
            username: userName,
            password: userPassword,
        }
        singin(user, () => navigate('/home', {replace: true}))
    }
  return (
    <div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Email" 
                name="email" 
                type="email"
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                />
            <input 
                placeholder="Password" 
                name="password" 
                type="password" 
                value={userPassword} 
                onChange={(e) => setUserPassword(e.target.value)}
                />
            <button type="submit">Login</button>
        </form>
    </div>
  );
};
