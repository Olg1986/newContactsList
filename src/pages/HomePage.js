import React, { useState } from 'react';
import {useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useToggleContactMutation} from '../redux';

import './home.css';

export const HomePage = () => {
    const [nameChange, setNameChange] = useState('');
  
    const [nameCont, setNameCont] = useState('');
    const [phoneCont, setPhoneCont] = useState('');

   

    const {data = [], isLoading} = useGetContactsQuery(nameChange);
    const [addContact] = useAddContactMutation();
    const [deleteContact] = useDeleteContactMutation();
    const [update] = useToggleContactMutation();

  
  
    const handleAddContact = async () => {
  
      if (nameCont && phoneCont) {
        await addContact({
          name: nameCont,
          phone: phoneCont
        }).unwrap()
      }
      setNameCont('');
      setPhoneCont('');
    }
  
    const handleDeleteContact = async (id) => {
      await deleteContact(id).unwrap()
    }
  
    const updateContact = async (cont) => {
     const name = prompt() || "";
     update({...cont, name});
    }
  
    if (isLoading) return <div>Loading...</div>

  return (<div>
<div>
      </div>
      <form>
        <input value={nameCont} onChange={(e) => setNameCont(e.target.value)}/>
        <input value={phoneCont} onChange={(e) => setPhoneCont(e.target.value)}/>
        <button onClick={handleAddContact}>add</button>
      </form>
      <input value={nameChange} onChange={(e) => setNameChange(e.target.value)}/>
     {data.map(item => {
       return (
         <div key={item.id} className="item">{item.name}
          <button onClick={() => updateContact(item)}>Сhange</button>
          <button onClick={() => handleDeleteContact(item.id)}>Delete</button>
         </div>
       )
     })}
    
  </div>
  );
};
