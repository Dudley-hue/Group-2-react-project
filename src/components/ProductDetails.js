import React from 'react'
import data from '../Data';
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams();
    console.log(typeof (id))
    const product = (data.productItems.find(product => product.id === parseInt(id)))
    // if (!product) {
    // return <div>product not found!</div>;
    // }
    return (
        <div className='detail-container'>
            <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p><strong className="card-text">Price: </strong>{product.price}</p><br />
                    {/* <strong>Class: {product.info}</strong><br /> */}
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails