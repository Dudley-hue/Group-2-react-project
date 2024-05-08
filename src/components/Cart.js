import React from 'react'
import "./Cart.css"

function Cart({cartItems, handleAddProduct, handleRemoveProduct}) {

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0
    )

  return (
    <div className='cart-items'>
        <div className='items-header'>Cart Items</div>

        {cartItems.length === 0 && (<div className='empty-cart'>No items are added</div>)}

        <div>
            {cartItems.map((item) => (
                <div key={item.id} className='item-list'>
                    <img src={item.image} alt={item.name} className='cart-image'/>
                    <div className='item-name'>{item.name}</div>
                    <div className='item-function'>
                        <button className='items-add' onClick={()=>handleAddProduct(item)}>+</button>
                        <button className='items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className='cart-quantity'>
                        {item.quantity}*{item.price}
                    </div>
                </div>
            ))}
        </div>
        <div className='total-price'>
            Total price
            <div className='cart-total'>
                KSH{totalPrice}
            </div>
        </div>
    </div>
  )
}

export default Cart