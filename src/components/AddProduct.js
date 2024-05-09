import React, { useState } from 'react'
import "./AddProduct.css"


function AddProduct() {

   
    const [product, setProduct] = useState({
        name:"",
        category:"",
        gender:"",
        brand:"",
        description:"",
        size:"",
        price:"",
        image:""
})

    function submitProduct(event){
        event.preventDefault();

            let productObj= {
            name:product.name,
            category:product.category,
            gender:product.gender,
            brand:product.brand,
            description:product.description,
            size:product.size,
            price:product.price,
            image:product.image
        }
        addingToDb(productObj)
    }

    function addingToDb(productObj){
        fetch("http://localhost:3000/cloth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(productObj)
        })
        .then(res => res.json())
        .then(prod => console.log(prod))
    }

    
    function handleSubmit(event){
        const newProduct = {...product}
        newProduct[event.target.id] = event.target.value
        setProduct(newProduct)
        console.log(newProduct)
    }
    
  return (
    <div className='body'>
    <div className='container'>
        <div className='title'>Add Product Form</div>
        <form id='add-items-form' onSubmit={(event)=>submitProduct(event)}>
            <div className='item-details'>
                <div className='input-box'>
                    <span className='details'>Name</span>
                    <input onChange={(event)=>handleSubmit(event)} type='text' id='name' placeholder='Enter the product name' value={product.name}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Category</span>
                    <input onChange={(event)=>handleSubmit(event)} type='text' id='category' placeholder='Enter the product Category' value={product.category}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Gender</span>
                    <input onChange={(event)=>handleSubmit(event)} type='text' id='gender' placeholder='Enter Gender' value={product.gender}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Brand</span>
                    <input onChange={(event)=>handleSubmit(event)} type='text' id='brand' placeholder='Enter the product brand' value={product.brand}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Description</span>
                    <input onChange={(event)=>handleSubmit(event)} type='text' id='description' placeholder='Enter the product description' value={product.description}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Size</span>
                    <input onChange={(event)=>handleSubmit(event)} type='text' id='size' placeholder='Enter the product Size' value={product.size}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Price</span>
                    <input onChange={(event)=>handleSubmit(event)} type='text' id='price' placeholder='Enter the product price' value={product.price}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Image Url</span>
                    <input onChange={(event)=>handleSubmit(event)} type='text' id='image' placeholder='Enter the product image Url' value={product.image}/>
                </div>
            </div>
            <div className='button'>
                <button className='submit' >Add Product</button>
                
            </div>
        </form>
    </div>
    </div>

  )
}

export default AddProduct