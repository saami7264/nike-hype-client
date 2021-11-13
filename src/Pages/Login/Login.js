import React, { useState } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import img from '../../images/login.png'
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import './Login.css'

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, logInUser, isLoading, authError, signInWithGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLogin = e => {
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <Navigation></Navigation>
            <h1 className="text pt-5" style={{ color: '#EE2D34' }}>Nike Hype Login</h1>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6} className="mt-5 pt-5">
                        <form onSubmit={handleLogin}>
                            <input className="w-75 mb-3 field" type="email" name="email" onChange={handleOnChange} label="Email" placeholder="Email" />
                            <input className="w-75 mb-3 field" type="password" name="password" onChange={handleOnChange} label="Password" placeholder="Password" />
                            <br />
                            <button type="submit" className="purchase-btn mb-3">Login</button>
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <button style={{ color: 'black' }} className="purchase-btn">New User? Please Register</button>
                            </NavLink>
                            <h3 className="text my-3">--------------------Or--------------------</h3>
                            <button
                                onClick={handleGoogleSignIn}
                                className="purchase-btn"
                            >
                                <i style={{ marginRight: '10px', color: 'blue' }} className="fab fa-google"></i>Sign In Using Google</button>
                        </form>

                        {isLoading && <Spinner animation="grow" />}

                        {user?.email && <Alert variant="success">Logged In Successfully</Alert>}

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

export default Login;