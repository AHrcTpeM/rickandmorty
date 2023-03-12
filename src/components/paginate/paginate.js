import React from 'react';
import './paginate.scss';

function Paginate({ page, maxPage, changPage }) {
    const definitionPage = (a, b, c, d) => (page > 3 && maxPage > 4 ? (page < maxPage - a ? page + b : maxPage + c ) : d);
    const arrayPages = [
        definitionPage(-2, -2, -4, 1),
        definitionPage(-2, -1, -3, 2),
        definitionPage(-2, 0, -2, 3),
        definitionPage(-2, 1, -1, 4),
        definitionPage(-1, 2, 0, 5),
    ]
    return (
        <div className='group'>
            <span className={page === 1 ? 'arrow inactive' : 'arrow paginate'} onClick={() => changPage(page > 1 ? page - 1 : 1)} >Prev</span>
            {arrayPages.map((numPage, idx) => 
                <span key={idx} 
                      className={numPage > maxPage ? 'inactive' : page === numPage ? 'active' : 'paginate'} 
                      onClick={() => changPage(numPage < maxPage + 1 ? numPage : page)}
                >
                      {numPage}
                </span>
            )}
            <span className={page === maxPage ? 'arrow inactive' : 'arrow paginate'} onClick={() => changPage(page < maxPage ? page + 1 : maxPage)}>Next</span>
        </div>        
    )
}

export default Paginate;