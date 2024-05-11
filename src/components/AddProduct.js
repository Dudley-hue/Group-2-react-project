import React, { useState } from 'react'
import "./AddProduct.css"


function AddProduct() {


        fetch("http://localhost:3000/cloth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

        newProduct[event.target.id] = event.target.value
        setProduct(newProduct)
        console.log(newProduct)
    }

}

export default AddProduct