import React from 'react';
import Goback from '../../components/goback/goback';

function NotFound({ onClick }) {
    return (
        <>
            <Goback onClick={onClick} />
            <div className='error'>Page not found.</div>
        </>
        
    )
}
export default NotFound;