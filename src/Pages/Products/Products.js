import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fast-ridge-83327.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const sixProducts = products.slice(4)

    return (
        <div>
            <h1 style={{ marginTop: '90px' }} className='text'>Our Offerings</h1>
            <Container>
                <Row className="g-5">
                    {
                        sixProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;