import React, { useEffect } from 'react';

function SignOut() {
    useEffect(() => {
        let btn = document.getElementById('googleFrame');   
        let value = document.getElementById('gName').innerHTML;
        btn.addEventListener("mouseover", function() {
            document.getElementById('gName').innerText = "Sign Out";
        })
        
        btn.addEventListener("mouseout", function() {
            document.getElementById('gName').innerText = value;
        })
    }, []);
    return (
        <></>
    )
}
export default SignOut;