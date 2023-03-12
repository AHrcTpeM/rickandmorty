import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.scss';

function Card({ obj, onClick }) {
    return (    
        <div className='card' onClick={() => { onClick(obj.id) }}>   
            <NavLink to='/info' className='link'>
                <div className='photo' style={{backgroundImage: "url(" + obj.image + ")"}}></div>
                <div className='description'>
                    { (obj.name.length < 18) && <div className='name'>{obj.name}</div>}
                    { (obj.name.length > 17) && <div className='longname'>{obj.name}</div>}
                    
                    <div className='species'>{obj.species}</div>
                </div>   
            </NavLink>         
        </div>                
    )
}
export default Card;