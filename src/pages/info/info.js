import React from 'react';
import Maincharacter from '../../containers/maincharacter/maincharacter';
import Goback from '../../components/goback/goback';

function Info({ onClick, result }) {
    return (
        <>
            <Goback onClick={onClick} />
            {!result ? <div className='error'>There is nothing here.</div> :                
                <Maincharacter result={result} />
            }  
        </>
    )
}
export default Info;