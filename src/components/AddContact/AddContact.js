import React from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useGetContactsQuery, useAddContactMutation} from '../../redux';
import { useForm, Controller, useFormState} from 'react-hook-form';
import {nameValidation, phoneValidation} from './validation';
import './AddContact.css';

export const AddContact = () => {
    const {refetch} = useGetContactsQuery();
    const [addContact] = useAddContactMutation();

    const {
        handleSubmit,
        control, 
        reset} = useForm();
    const {errors} = useFormState({
        control
    });
    
    const onSubmit = (data) => {
        const {name, phone} = data;
        if (name && phone) {
            addContact({name, phone});
            console.log('ok')
            reset();
            
        }
    };

  return (
    <div className="add-form">
        <Typography variant="h4" component="div" className="add-form__title">
            Добавить контакт
        </Typography>
        <form 
            className="auth-form__form-block" 
            onSubmit={handleSubmit(onSubmit)}
            >
         <Controller
            control={control}
            name="name"
            rules={nameValidation}
            defaultValue=""
            render={({field}) => (
                <TextField
                    label="Имя"
                    size="small"
                    margin="normal"
                    className="add-form__input"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.name?.message}
                    helperText={errors.name?.message}
                />  
             )}
         />   
         <Controller
            control={control}
            name="phone"
            rules={phoneValidation}
            defaultValue=""
            render={({field}) => (
                <TextField
                    label="Телефон"
                    type="phone"
                    size="small"
                    margin="normal"
                    className="add-form__input"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.phone?.message}
                    helperText={errors.phone?.message}
                />  
             )}
         />   
        
        <Button 
            type="submit"
            variant="contained"
            disableElevation={true}
            fullWidth={true}
            sx={{
                marginTop: 2
            }}
            onClick={() => refetch()}
        >Добавить</Button>
        </form>
        
    </div>
  );
};
