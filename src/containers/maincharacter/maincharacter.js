import React from 'react';
import './maincharacter.scss';
import Frame from '../../components/frame/frame';

function Maincharacter({ result }) {
    return (
        <div className='wrapper'>    
            <div className='photo' style={{backgroundImage: "url(" + result?.image + ")"}}></div> 
            <div className='name'>{result?.name}</div>
            <div className='inform'>Informations</div>
            <div className='frames'> 
                {['Gender', 'Status', 'Species', 'Origin', 'Type'].map((title, idx) => 
                    <Frame key={idx}
                           title={title} 
                           text= { title === 'Origin' ?
                                   result[title.toLowerCase()].name :
                                   result[title.toLowerCase()] } 
                    />
                )}
            </div>    
        </div>
    )
}
export default Maincharacter;