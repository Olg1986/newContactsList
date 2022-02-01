import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useDeleteContactMutation, useToggleContactMutation} from '../../redux';
import './Contact.css';

export const Contact = (item) => {
    const [deleteContact] = useDeleteContactMutation();
    const [update] = useToggleContactMutation();

    const handleDeleteContact = async (id) => {
        await deleteContact(id).unwrap()
    }
    
    const updateContact = async (cont) => {
       const name = prompt() || "";
       update({...cont, name});
    }
    
  return (
    <li className="cont-item" key={item.id}>
        <div className="cont-item__block">
        <Typography variant="h5" component="h5" >
          {item.name}
        </Typography>
        <Typography  variant="h5" component="h5" className="cont-item__phone" >
          {item.phone}
        </Typography>
        <DeleteOutlinedIcon  onClick={() => handleDeleteContact(item.id)}/>
        <Button variant="contained" onClick={() => updateContact(item)}>Update</Button>
        </div>
    </li>
  );
};
