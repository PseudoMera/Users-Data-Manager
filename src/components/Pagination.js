import React from 'react';

export const Pagination = ({userPerPage, totalUsers, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalUsers/userPerPage); i++) pageNumbers.push(i);

    return (
        <nav className="pagination is-rounded right-container" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                {
                    pageNumbers.map((num) => (
                        <li key={num}>
                            <a onClick={() => paginate(num)}  className="pagination-link">
                                {num}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}