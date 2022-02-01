import React, { useState } from 'react';
import {useGetContactsQuery} from '../../redux';
import {Contact} from '../../components/Contact';
import {AddContact} from '../../components/AddContact';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import './home.css';

export const HomePage = () => {
  const [nameChange, setNameChange] = useState('');

  const {data = [], isLoading} = useGetContactsQuery(nameChange);
   
  if (isLoading) return <div>Loading...</div>


  return (<div className="home">
      <div className="left">
          <Typography variant="h4" component="h4" >
            Список контактов
          </Typography>
          <TextField
              label="Имя"
              size="small"
              margin="normal"
              className="add-form__input"
              value={nameChange} 
              onChange={(e) => setNameChange(e.target.value)}            
            />  
          {data.map(item => {
            return (
              <ul className="cont-list">
                <Contact {...item}/>
              </ul>
            )
          })}
      </div>
      <div div className="right">
      <AddContact/>
      </div>
  </div>
 
  );
};
