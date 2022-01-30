import React, { useState} from 'react';


export const LoginPage = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    
    const handleClick = (e) => {
        const {email, password} = e.target.value;
        if (email && password) {
            
        }
    }
  return (
    <div>
        <h2>Login Page</h2>
        <form >
            <input 
                placeholder="Email" 
                name="email" 
                type="email" 
                value={email}
                onChanch={(e) => setEmail(e.target.value)}/>
            <input 
                placeholder="Password" 
                name="password" 
                type="password" 
                value={password}
                onChanch={(e) => setPassword(e.target.value)}/>
            <button>Login</button>
        </form>
    </div>
  );
};
