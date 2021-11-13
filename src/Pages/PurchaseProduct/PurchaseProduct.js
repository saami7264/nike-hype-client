import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import './purchaseProduct.css'

const PurchaseProduct = () => {
    const { productId } = useParams()

    const [product, setProduct] = useState()

    const { user } = useAuth();

    const initialInfo = { name: user?.displayName, email: user?.email, phone: '' }

    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const history = useHistory()

    useEffect(() => {
        fetch(`https://fast-ridge-83327.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const handlePurchase = e => {
        const order = {
            ...orderInfo,
            productName: `${product?.name}`,
            img: `${product?.img}`,
            price: `${product?.price}`
        }

        fetch('https://fast-ridge-83327.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                alert("Order Placed Successfully");
                history.push('/')
            })

        e.preventDefault();
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo }
        newInfo[field] = value;
        setOrderInfo(newInfo)
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container className="my-5">
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                        <img className="img-fluid" src={product?.img} alt="" />
                        <br />
                        <form onSubmit={handlePurchase} className="mt-3">
                            <input className="purchase-field" onBlur={handleOnBlur} name="name" type="text" placeholder="Name" defaultValue={user?.displayName} />

                            <input className="purchase-field" onBlur={handleOnBlur} name="email" type="email" placeholder="Email" defaultValue={user?.email} />

                            <input className="purchase-field" onBlur={handleOnBlur} name="phone" type="number" placeholder="Phone Number" />

                            <br />

                            <textarea className="address-field" onBlur={handleOnBlur} name="address" type="text" placeholder="Address" />

                            <br />
                            <button type="submit" className="purchase-btn mb-5 mt-3">Buy Now</button>
                        </form>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                        <p className="text">{product?.description}</p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default PurchaseProduct;