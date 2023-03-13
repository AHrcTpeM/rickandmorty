import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './auth.scss';
import SignOut from './signout'

function Auth() {
    const [user, setUser] = useState({});

    function handleCredentialResponse(response) {
        let userObj = jwt_decode(response.credential);
        setUser(userObj);
        document.getElementById('google_btn').hidden = true;
    }

    function handleSignOut(event) {
        window.google.accounts.id.disableAutoSelect();
        setUser({});
        document.getElementById('google_btn').hidden = false;
    }

    useEffect(() => {
    window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
    });
    const parent = document.getElementById('google_btn');
    window.google.accounts.id.renderButton(parent, {theme: "outline"});
    window.google.accounts.id.prompt();
    }, []);    

    return (
        <>
            <div id='google_btn'></div>            
            { user.name && 
                <>
                    <div id='googleFrame' className='gFrame' onClick={(e) => handleSignOut(e)}>
                        <img className='gImage' src={user.picture ?? 'images/google_user.jpg'} alt="alt"></img>
                        <div className='flexCenter'>
                            <div id='gName'>{user.name}</div>
                        </div>
                        <div className='flexCenter'>
                            <img className='gImage2' src='images/g_icon.png' alt="alt"></img>
                        </div>
                    </div>
                    <SignOut />
                </>          
             }
        </>
    )
}
export default Auth;