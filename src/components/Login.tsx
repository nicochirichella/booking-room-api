// create Login component using firebase auth

import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { login, selectUser } from '../features/user/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const user = useAppSelector(selectUser);

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch(login(user));
            navigate("./");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <>
            <div className={classes.root}>
                {
                    user ? (
                        <div className={classes.inputSection}>
                            <h1> Welcome {user.displayName} </h1>
                        </div>
                    ) : (
                        <>
                            <div className={classes.inputSection}>
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            <div className={classes.inputSection}>
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            <div className={classes.inputSection}>
                                <Button 
                                    onClick={() => handleLogin()}
                                > Login </Button>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
}

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    inputSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0'
    },
    input: {
        width: '300px',
        height: '40px',
        padding: '10px',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 rgba(0,0,0,0.2)'
    }

}));