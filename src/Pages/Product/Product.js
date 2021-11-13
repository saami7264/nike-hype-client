import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {

    const { name, details, price, img, _id } = product;

    return (
        <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className="my-5 product-card">
            <img className="img-fluid img" src={img} alt="" />
            <br />
            <div className="mt-3">
                <h1 className='text'>{name}</h1>
                <h5 className='text'>{details}</h5>
                <p className="text">Price: ${price}</p>
                <Link to={`/purchase/${_id}`}><button className="purchase-btn">Buy Now</button></Link>
            </div>
        </Col>
    );
};

export default Product;