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
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
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
                        {[...Array(5)].map((star, index) => {
                            const currentRating = index +1;
                           return (
                            <label key={index}>
                                <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)}/>
                                <i className="fa-regular fa-star"  color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"} onMouseEnter={()=>setHover(currentRating)} onMouseLeave={()=>setHover(null)}/>
                                
                            </label>
                           )
                        })}
                        
                        
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