import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './auth.scss';
import SignOut from './signout'

function Auth() {
    const [token] = useState(sessionStorage.getItem("token"));
    const [user, setUser] = useState({});

    function handleCredentialResponse(response) {
        sessionStorage.setItem("token", response.credential);
        let userObj = jwt_decode(response.credential);
        setUser(userObj);
        document.getElementById('google_btn').hidden = true;
    }

    function handleSignOut(event) {
        sessionStorage.setItem("token", "");
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
        
        try {
            const data = jwt_decode(token);
            setUser(data);            
            document.getElementById('google_btn').hidden = true;
        } catch(error) {
            // console.log('Invalid token specified');
            window.google.accounts.id.prompt();
        }
    }, [token]);    

    return (
        <>
            <div id='google_btn'></div>     
            { user.name && 
                <>
                    <div id='googleFrame' className='gFrame' onClick={(e) => handleSignOut(e)}>
                        <img className='gImage' src={user.picture ?? 'images/google_user.jpg'} alt="avatar"></img>
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