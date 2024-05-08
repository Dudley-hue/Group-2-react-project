import React from 'react';
import './Search.css';

function Search() {
    return (
        <div className='search-box'>
            {/* <i className='fa fa-search'></i> */}
            <input
                text='text'
                placeholder='Search here...'
            />
        </div>
    )
}

export default Search