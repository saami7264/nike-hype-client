import React from 'react';
import { Col, Container } from 'react-bootstrap';

const SingleReview = ({ review }) => {

    const { name, email, comment } = review;

    return (
        <Container>
            <Col className="p-5" style={{ border: '2px solid #F82E40', minHeight: '350px', borderRadius: '10px' }} >
                <h5 className="text">{name}</h5>
                <small style={{ color: '#F82E40' }}>{email}</small>
                <br />
                <br />
                <p style={{ fontSize: '16px', fontWeight: '100' }} className="text">{comment}</p>
            </Col>
        </Container>
    );
};

export default SingleReview;