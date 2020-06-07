import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { StyledForm } from '../styled/StyledForm';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function SignUp() {
    const [input, setInput] = useState({
        displayName:'',
        email:'',
        password:''

    });
    const classes = useStyles();

    const handleChange = (event) => {
      const { name, value} = event.target;

      setInput({
          ...input,
          [name] : value
      })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        setInput({
            displayName: '',
            email: '',
            password: ''

        })
    }

    const {displayName,email,password} = input;

    return (
        <StyledForm onSubmit={handleSubmit} className={classes.root}  autoComplete="off">
            <h2>Sign Up</h2>
            
                <TextField
                 required 
                 id="standard-required" 
                 label="Display Name" 
                 name = "displayName"
                 defaultValue={displayName}
                 onChange={handleChange} />
                <TextField 
                required 
                label="E-mail" 
                type='email' 
                name="email"
                defaultValue={email} 
                onChange={handleChange}/>
               
                <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    defaultValue={password}
                    onChange={handleChange}
                />

                <input type="submit" value="Sign Up" />
               
               
              
            
           
           
        </StyledForm>
    );
}
