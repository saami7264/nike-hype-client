import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import leftImg from '../../../images/sneakers-left.png'
import rightImg from '../../../images/sneakers-right.png'
import centerImg from '../../../images/sneaker-center.png'
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <Container className='container'>
            <Row>
                <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                    <img className="img-fluid" src={leftImg} alt="" />\
                    <h3 className='sneaker-text'>I only let my head down to admire my sneakers</h3>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                    <img className="img-fluid centerImg" src={centerImg} alt="" />
                </Col>
                <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                    <img className="img-fluid" src={rightImg} alt="" />
                    <h3 className='sneaker-text text-2'>Life is way too short to wear boring shoes</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeBanner;