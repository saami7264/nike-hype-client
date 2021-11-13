import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Products from '../../Products/Products';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Navigation from '../Navigation/Navigation';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Products></Products>

            <Container className="my-5">
                <Row>
                    <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                        <i className="fab fa-paypal fa-7x icon"></i>
                        <br />
                        <p className="text mt-3">Convenient Online Payment</p>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                        <i className="fas fa-shipping-fast fa-7x icon"></i>
                        <br />
                        <p className="text mt-3">Free And Fast Shipping</p>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                        <i className="fas fa-exchange-alt fa-7x icon"></i>
                        <br />
                        <p className="text mt-3">Easy Return Policy</p>
                    </Col>
                </Row>
            </Container>
            <h1 style={{ marginTop: '90px' }} className='text'>What Our Customers Say</h1>
            <ReviewDisplay></ReviewDisplay>
            <Footer></Footer>
        </div>
    );
};

export default Home;