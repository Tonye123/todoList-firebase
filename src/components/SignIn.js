import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { StyledForm } from '../styled/StyledForm';
import { signInWithGoogle } from '../Firebase';
import { useAuth } from '../Contexts/AuthContext';
import { Link,useHistory } from 'react-router-dom';


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
    const auth = useAuth();
    const history = useHistory();
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

        history.push("/authentication")
        
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

            <input className="signin" type="submit" value="Sign In" />
            <button onClick={()=>{
                signInWithGoogle()
                history.push("/authentication")
                }}>Sign In With Google</button>
            <div>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
           






        </StyledForm>
    );
}