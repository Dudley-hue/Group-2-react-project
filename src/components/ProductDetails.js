import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

const API = "http://localhost:3000/cloth"

function ProductDetails() {
    const { id } = useParams();
    console.log(typeof (id))
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then(data => {
            const foundProduct = (data.find(p => p.id === id));
            setProduct (foundProduct);
        })
    })
    return (
        <div className='detail-container'>
            <div className="detail-card">
                <img src={product.image} className="prod-image" alt={product.name} />
                <div className="card-body">
                    <h5 className="prod-name">{product.name}</h5>
                    <p className='brand'>Brand: {product.brand}</p>
                    <p className="detail-price">$ {product.price}</p>
                    <p className='description'>{product.description}</p>
                    <p className='category'>Category: {product.category}</p>
                    <p className='gender'>Gender: {product.gender}</p>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails