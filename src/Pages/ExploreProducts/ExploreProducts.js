import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import Product from '../Product/Product';

const ExploreProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fast-ridge-83327.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <h2 className="text my-5">Hypest Sneakers of Recent Time</h2>
            <Container>
                <Row className="g-5">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ExploreProducts;