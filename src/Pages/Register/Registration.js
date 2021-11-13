import React, { useState } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import img from '../../images/login.png'
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';

const Registration = () => {

    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleRegister = e => {
        if (loginData.password !== loginData.password2) {
            alert('Passwords Not Matching')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <h1 className="text pt-5" style={{ color: '#EE2D34' }}>Nike Hype Registration</h1>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6} className="mt-5 pt-5">
                        {!isLoading && <form onSubmit={handleRegister}>
                            <input className="w-75 mb-3 field" type="text" name="name" onChange={handleOnBlur} label="Name" placeholder="Name" />

                            <input className="w-75 mb-3 field" type="email" name="email" onChange={handleOnBlur} label="Email" placeholder="Email" />

                            <input className="w-75 mb-3 field" type="password" name="password" onChange={handleOnBlur} label="Password" placeholder="Password" />

                            <input className="w-75 mb-3 field" type="password" name="password2" onChange={handleOnBlur} label="Confirm Password" placeholder="Retype Password" />

                            <br />
                            <button type="submit" className="purchase-btn mb-3">Register</button>
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <button style={{ color: 'black' }} className="purchase-btn">Already Registered? Please Login</button>
                            </NavLink>
                        </form>}

                        {isLoading && <Spinner animation="grow" />}

                        {user?.email && <Alert variant="success">User Created Successfully</Alert>}

                        {authError && <Alert variant="danger">{authError}</Alert>}

                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                        <img src={img} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Registration;