import React from 'react';
import './characters.scss';
import Card from '../../components/card/card';

function Characters({ results, onClick }) {
    return (
        <div className='characters'>
            {results.map((obj) => <Card key={obj.id} onClick={onClick} obj={obj} />)}
        </div>
    )
}
export default Characters;