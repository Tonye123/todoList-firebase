import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { StyledForm } from '../styled/StyledForm';
import { signInWithGoogle } from '../Firebase';
import { useAuth } from '../Contexts/AuthContext';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function SignIn() {
    const [input, setInput] = useState({
        email: '',
        password: ''

    });
    const auth = useAuth()
    const classes = useStyles();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInput({
            ...input,
            [name]: value
        })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.SignIn(input.email,input.password)
        .catch(err => console.error("error signing in", err.message))
        
        setInput({
            email: '',
            password: ''

        })
    }

    const { email, password } = input;
   
    

    return (
        <StyledForm onSubmit={handleSubmit} className={classes.root} autoComplete="off">
            <h2>Sign In</h2>

            
            <TextField
                required
                label="E-mail"
                type='email'
                name="email"
                defaultValue={email}
                onChange={handleChange} />

            <TextField
                required
                id="standard-password-input"
                label="Password"
                type="password"
                name="password"
                defaultValue={password}
                onChange={handleChange}
            />

            <input type="submit" value="Sign In" />
            <button onClick={signInWithGoogle}>Sign In With Google</button>
           






        </StyledForm>
    );
}