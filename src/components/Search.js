import React from 'react';
import './Search.css';

function Search() {
    return (
        <div className='search-box'>
            
            <input
                text='text'
                placeholder='Search here...'
            />
            <button><i className='fa fa-search'></i></button>
        </div>
    )
}

export default Search