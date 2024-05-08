import React from 'react'
import "./Products.css"

function Products({productItems, handleAddProduct}) {
  return (
    <div className='products'>
        {productItems.map((productitem) => (
            <div className='card'>
                <div>
                    <img className='prod-image' src={productitem.image} alt={productitem.name}/>
                </div>
                <div>
                    <h3 className='prod-name'>{productitem.name}</h3>
                </div>
                <div className='price'>KSH{productitem.price}</div>
                <div>
                    <button className='product-btn' onClick={()=>handleAddProduct(productitem)}>Add to Cart</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products