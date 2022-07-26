import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Paper, TextField} from "@mui/material";
import style from './Login.module.css'
import {Link} from "react-router-dom";
import {LoginTypes} from "./LoginTypes";

export const Login = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm<LoginTypes>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<LoginTypes> = (data) => {
    alert(`Your email ${data.email} and your password is ${data.password}`)
    reset()
  }
  return (
    <div className={style.registration}>
      <Paper className={style.registrationPaper} elevation={2}>
        <div className={style.registrationPaperContainer}>
          <h1 className={style.registerH1}>Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth label="Email"
                       id="fullWidth"
                       variant="standard"
                       margin="normal"
                       type='text'
                       {...register('email', {
                         required: 'Email is required!',
                         pattern: {
                           value: /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i,
                           message: 'Enter valid email'
                         }
                       })}
            />
            {errors?.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
            <TextField fullWidth label="Password"
                       id="fullWidth"
                       variant="standard"
                       margin="normal"
                       type='text'
                       {...register('password',
                         {
                           required: 'Password is required!',
                           minLength: {
                             value: 5,
                             message: 'Password should be min 5 symbols'
                           }
                         })}
            />
            {errors?.password && <span style={{color: 'red'}}>{errors.password.message}</span>}

            <Button variant="contained"
                    type='submit'
                    sx={{
                      width: 300,
                      marginTop: 5,
                      borderRadius: 5,
                      marginLeft: 3,
                    }}
            >
              Sign Up
            </Button>
          </form>

          <span style={{color: 'gray', marginTop: 30, fontWeight: 'bold'}}>Don't have an account?</span>
          <Link style={{
            color: 'blue', marginTop: 10,
            backgroundColor: "transparent",
            boxShadow: "none"
          }} to="/registration">
            Sign Up
          </Link>
        </div>
      </Paper>
    </div>
  );
};

