import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer p-0">
            <Row className="mt-3">
                <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                    <h3 className="text">Nike Hype</h3>
                    <p className="text-2 text-start ms-2">Nike Hype is a dedicated platform for buying Nike Sneakers. We provide top quality sneakers and services for our clients. We are a online based site for sneaker enthusiast. We only bring the best, most hyped and loved sneakers for you</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                    <a target="blank" className="links" href="https://www.facebook.com/"><i className="fab fa-facebook fa-5x icon"></i></a>
                    <a target="blank" className="links" href="https://www.instagram.com/"><i className="fab fa-instagram fa-5x ms-5 icon"></i></a>
                    <a target="blank" className="links" href="https://www.reddit.com/"><i className="fab fa-reddit fa-5x ms-5 icon"></i></a>
                    <a target="blank" className="links" href="https://www.snapchat.com/"><i className="fab fa-snapchat fa-5x ms-5 icon"></i></a>
                </Col>
                <Col xs={12} sm={3} md={3} lg={3} xl={3} className="p-0" style={{ maxWidth: '100vh' }}>
                    <h3 className="text">Useful Links</h3>
                    <a className="text-2 text-end ms-2 links" href="https://www.stadiumgoods.com/" target="blank">Stadium Goods</a>
                    <br />
                    <a className="text-2 text-end ms-2 links" href="https://www.flightclub.com/" target="blank">Flight Club</a>
                    <br />
                    <a className="text-2 text-end ms-2 links" href="https://www.goat.com/" target="blank">GOAT</a>
                    <br />
                    <a className="text-2 text-end ms-2 links" href="https://www.nike.com/" target="blank">Nike</a>
                    <br />
                    <a className="text-2 text-end ms-2 links" href="https://www.global.jdsports.com/" target="blank">JD Sports</a>
                    <br />
                    <a className="text-2 text-end ms-2 links" href="https://www.nike.com/snkrs-app" target="blank">SNKRS</a>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;