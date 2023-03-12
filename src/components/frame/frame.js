import React from 'react';
import './frame.scss';

function Frame({ title, text }) {
    return (
        <div className='frame'>
            <div className='title'>{title !== 'Species' ? title : 'Specie'}</div>
            <div className='second'>{text ? text : 'unknown'}</div>
        </div>
    )
}
export default Frame;