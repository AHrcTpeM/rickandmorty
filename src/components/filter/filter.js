import React from 'react';
import './filter.scss';

function Filter({ search, onChange }) {
    return (
        <div className='filter'>
            <img src="images/icon.png" alt="icon" />
            <form onSubmit={(event) => event.preventDefault()}>
                <input type={"text"} 
                        placeholder={'Filter by name...'}   
                        value={search}
                        onChange={onChange}
                />
            </form>                
        </div>
    )
}
export default Filter;