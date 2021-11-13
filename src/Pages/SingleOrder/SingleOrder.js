import React from 'react';
import { Col } from 'react-bootstrap';

const SingleOrder = ({ order }) => {

    const { productName, img, price, _id } = order;

    const handleRemove = () => {
        const proceed = window.confirm('Are You Sure You Want To Remove This Sneaker?')
        if (proceed) {
            const url = `https://fast-ridge-83327.herokuapp.com/orders/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Removed The Sneaker");
                        window.location.reload(false);
                    }
                })
        }
    }



    return (
        <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className="text-center p-5">
            <h5 className="text">{productName}</h5>
            <small style={{ color: '#F82E40' }}>Price: ${price}</small>
            <img className="img-fluid" src={img} alt="" />
            <button onClick={handleRemove} className="purchase-btn mb-5 mt-5">Remove</button>
        </Col>
    );
};

export default SingleOrder;