import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink className="logo" to="/home">
                            <h3>Nike Hype</h3>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-item" to="/explore">Hypest Sneakers</NavLink>
                            {!user?.email && <NavLink className="nav-item" to="login">Login</NavLink>}
                            {user?.email && <NavLink className="nav-item" to="dashboard">Dashboard</NavLink>}
                            {user?.email && <button onClick={logOut} className="log-out-btn">Log Out</button>}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;