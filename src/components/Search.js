import React from 'react';
import './Search.css';

function Search({ searchInput, setSearchInput }) {
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <div className='search-box'>
            
            <input
                text='text'
                placeholder='Search brand here...'
                value={searchInput}
                onChange={handleSearchInput}
            />
            <button><i className='fa fa-search'></i></button>
        </div>
    )
}

export default Search