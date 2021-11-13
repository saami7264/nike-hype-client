import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import SingleOrder from '../SingleOrder/SingleOrder';
import './Dashboard.css'

const Dashboard = () => {

    const { user, logOut, admin } = useAuth();
    const [orders, setOrders] = useState()

    useEffect(() => {
        const url = `https://fast-ridge-83327.herokuapp.com/orders?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    return (
        <div style={{ backgroundColor: '#282C34', minHeight: '100vh' }}>
            <Navigation></Navigation>
            <Row className="my-5">
                <Col className="dashboard-left" xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
                    {!admin &&
                        <>
                            <Link to="/pay"><button className="purchase-btn mb-3 dashboard-btn">Payment</button></Link>
                            <br />
                            <Link to="/dashboard"><button className="purchase-btn mb-3 dashboard-btn">My Orders</button></Link>
                            <br />
                            <Link to="/review"><button className="purchase-btn mb-3 dashboard-btn">Review</button>
                                <br /></Link>
                        </>
                    }

                    {admin &&
                        <>
                            <Link to="/makeAdmin"><button className="purchase-btn mb-3 dashboard-btn">Make Admin</button></Link>
                            <br />
                            <Link to="/manageOrders"><button className="purchase-btn mb-3 dashboard-btn">Manage All Orders</button></Link>
                            <br />
                            <Link to="/manageProducts"><button className="purchase-btn mb-3 dashboard-btn">Manage Products</button></Link>
                            <br />
                            <Link to="/addProduct"><button className="purchase-btn mb-3 dashboard-btn">Add Product</button></Link>
                        </>
                    }
                    <br />
                    <button onClick={logOut} className="purchase-btn mb-3 dashboard-btn">Log Out</button>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={8}>
                    {!admin && <h1 className="text">Your Orders</h1>}
                    {admin && <h1 className="text">Welcome Dear Admin</h1>}
                    <Container>
                        <Row className="orders">
                            {orders?.map(order =>
                                <SingleOrder
                                    key={order._id}
                                    order={order}
                                ></SingleOrder>
                            )}
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;