import React from 'react';
import './main.scss';
import Header from '../../components/header/header';
import Characters from '../../containers/characters/characters';
import Filter from '../../components/filter/filter';
import Paginate from '../../components/paginate/paginate';

function Main({ onChange, search, error, onClick, results, changPage, page, maxPage }) {
    return (
        <>             
            <Header />
            <Filter onChange={onChange} search={search}/>
            {error ? <div className='error'>There is nothing here.</div> :
              <>
                <Characters onClick={onClick} results={results} />
                <Paginate changPage={changPage} page={page} maxPage={maxPage} />
              </>
            }                       
        </>
    )
}
export default Main;