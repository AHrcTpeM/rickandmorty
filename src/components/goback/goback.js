import React from 'react';
import { NavLink } from 'react-router-dom';
import './goback.scss';

function Goback({ onClick }) {
    return (
        <div className='goback' onClick={() => { onClick(0) }}>
            <NavLink to='/'>
                <img src="images/goback.png" alt="icon" /> 
            </NavLink>                
        </div>
    )
}
export default Goback;