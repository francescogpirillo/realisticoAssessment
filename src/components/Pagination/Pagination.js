import React from 'react';
import css from './Pagination.module.css';

const Pagination = ({ usersPerPage, totalUsers, currentPage, paginate , previousPage , nextPage}) => {
    const PageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        PageNumbers.push(i);
    }

    return (
        <div className={css.pagination}>
            <ul>
                {currentPage > 1 ?
                    <li>
                        <button onClick={previousPage}>&lt;</button>
                    </li>
                    : <></> }
                {PageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
                {currentPage < PageNumbers[PageNumbers.length - 1] ?
                    <li>
                        <button onClick={nextPage}>&gt;</button>
                    </li>
                    : <></> }
            </ul>
        </div>
    )
}

export default Pagination;