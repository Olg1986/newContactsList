import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../hock/useAuth';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, useFormState} from 'react-hook-form';
import {loginValidation, passwordValidation} from './validation';
import './AuthForm.css';


export const AuthForm = () => {

    const navigate = useNavigate();
    const {singin} = useAuth();

    const {handleSubmit, control} = useForm();
    const {errors} = useFormState({
        control
    });
    console.log(errors)
    const onSubmit = (data) => {
        console.log(data)
        const user = {
            username: data.login.value,
            password: data.password.value,
        }
        singin(user, () => navigate('/home', {replace: true}))
    };

   
  return (
    <div className="auth-form">
        <Typography variant="h4" component="h2" >
            Войдите
        </Typography>
        <Typography variant="subtitle1" component="div" className="auth-form__subtitle">
            Чтобы получить доступ
        </Typography>
        <form 
            className="auth-form__form-block" 
            onSubmit={handleSubmit(onSubmit)}
            >
         <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({field}) => (
                <TextField
                    label="Логин"
                    size="small"
                    margin="normal"
                    className="auth-form__input"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.login?.message}
                    helperText={errors.login?.message}
                />  
             )}
         />   
         <Controller
            control={control}
            name="password"
            rules={passwordValidation}
            render={({field}) => (
                <TextField
                    label="Пароль"
                    type="password"
                    size="small"
                    margin="normal"
                    className="auth-form__input"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.password?.message}
                    helperText={errors.password?.message}
                />  
             )}
         />   
        
        <Button 
            type="submit"
            variant="contained"
            disableElevation={true}
            fullWidth={true}
            sx= {{
                marginTop: 2
            }}
        >Войти</Button>
        </form>
    </div>
  );
};

