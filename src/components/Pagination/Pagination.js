import React from 'react';
import css from './Pagination.module.css';
import PropTypes from 'prop-types';

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
                    : <></> 
                }
                {PageNumbers.map(number => (
                    <li key={number}>
                        <button className={`${number === currentPage ? css.active : ""}`} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
                {currentPage < PageNumbers[PageNumbers.length - 1] ?
                    <li>
                        <button onClick={nextPage}>&gt;</button>
                    </li>
                    : <></> 
                }
            </ul>
        </div>
    )
}

Pagination.propTypes = {
    usersPerPage: PropTypes.number,
    totalUsers: PropTypes.number,
    currentPage: PropTypes.number,
    paginate: PropTypes.func,
    previousPage: PropTypes.func,
    nextPage: PropTypes.func
};

export default Pagination;