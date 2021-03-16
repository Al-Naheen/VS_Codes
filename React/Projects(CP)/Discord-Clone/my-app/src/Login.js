import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

import { Button } from '@material-ui/core'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            
            <div className="login__logo">
                <img src="https://logopng.net/wp-content/uploads/2020/07/logo-discord-png-icon-6.png" alt="" srcset=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>

        </div>
    )
}

export default Login
