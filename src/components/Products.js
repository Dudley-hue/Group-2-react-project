import "./Products.css"
import React, { useState } from 'react';
import data from '../Data';

function Products({ handleAddProduct }) {
    const [category, setCategory] = useState('all');

    const handleCategoryFilter = (category) => {
        setCategory(category);
    };

    const filteredProducts = category === 'all' ? data.productItems : data.productItems.filter(item => item.category === category);
    return (
        <div>
            <div>
                <button className='category-btn' onClick={() => handleCategoryFilter('all')}>All</button>
                <button className='category-btn' onClick={() => handleCategoryFilter('children')}>Children</button>
                <button className='category-btn' onClick={() => handleCategoryFilter('adults')}>Adults</button>
            </div>
            <div className='products'>
                {filteredProducts.map((productitem) => (
                    <div className='card'>
                        <div>
                            <img className='prod-image' src={productitem.image} alt={productitem.name} />
                        </div>
                        <div>
                            <h3 className='prod-name'>{productitem.name}</h3>
                        </div>
                        <div className='price'>KSH{productitem.price}</div>
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