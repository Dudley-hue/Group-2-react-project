import "./Products.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Search from "./Search";

function Products({ handleAddProduct, productItems }) {
    const [category, setCategory] = useState('all');
    const [searchInput, setSearchInput] = useState('');

    const handleCategoryFilter = (category) => {
        setCategory(category);
    };

    // const filteredProducts = category === 'all' ? data.productItems : data.productItems.filter(item => item.category === category);
    const filteredProducts = productItems.filter(item => {
        return(category === 'all' || item.category === category) &&
        (item.brand.toLowerCase().includes(searchInput.toLowerCase()))
    })
    return (
        <div>
            <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
            <div>
                <button className='category-btn' onClick={() => handleCategoryFilter('all')}>All</button>
                <button className='category-btn' onClick={() => handleCategoryFilter('child')}>Children</button>
                <button className='category-btn' onClick={() => handleCategoryFilter('adult')}>Adults</button>
            </div>
            <div className='products'>
                {filteredProducts.map((productitem) => (
                    <div className='card' key={productitem.id}>
                        <div>
                            <img className='prod-image' src={productitem.image} alt={productitem.name} />
                        </div>
                        <div>
                            <h3 className='prod-name'>{productitem.name}</h3>
                        </div>
                        <p className="brand">Brand: {productitem.brand}</p>
                        <div className='price'>$ {productitem.price}</div>
                        <div>
                        <Link to={`/product/${productitem.id}`} className="btn btn-primary">Details</Link>
                        </div>
                        <div>
                            <button className='product-btn' onClick={() => handleAddProduct(productitem)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products