// create a Login Page component allowing user to login with firebase auth with google or email/password

import { useState, useEffect} from 'react';
import { makeStyles,
     Button,
     Avatar,
     CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@material-ui/core';

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login, selectUser } from '../../features/user/userSlice';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useAppSelector(selectUser);

    useEffect(() => {
        if (user) navigate("/");
      }, [user]);

    const handleLogin = () => {
        console.log('handling login',email, password);
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch(login(user));
            navigate("/");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleGoogleLogin = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            dispatch(login(user));
            navigate("./");
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <div className= {classes.root}>
          <div className={classes.container}>
            <input
              type="text"
              className={classes.inputSection}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className={classes.inputSection}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className={classes.button}
              onClick={handleLogin}
            >
              Login
            </button>
            <button className={classes.buttonGoogle } onClick={handleGoogleLogin}>
              Login with Google
            </button>
            <div>
              <Link to="/reset">Forgot Password</Link>
            </div>
            <div>
              Don't have an account? <Link to="/register">Register</Link> now.
            </div>
          </div>
        </div>
      );
}

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    inputSection: {
        margin: '10px',
        padding: '10px',
        fontSize: '18px',
        marginBottom: '10px'
    }, 
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#dcdcdc',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    },
    button: {
        padding: '10px',
        fontSize: '18px',
        backgroundColor: 'black',
        marginbottom: '10px',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
    buttonGoogle: {
        padding: '10px',
        fontSize: '18px',
        backgroundColor: '#4285f4',
        marginbottom: '10px',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
}));
