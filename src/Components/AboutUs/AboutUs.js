import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../images/nursing1.jpg'
import institute from '../images/institute.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="my-5">
        <Container>
        <Row className="respomsive">
            <Col xs={6}>
                <h4 className="center">Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision .A health system consists of all organizations, people, and actions whose primary intent is to promote, restore, or maintain health</h4>
            </Col>
            <Col xs={6}>
                <img className="pic-size" src={about} alt="" />
            </Col>
        </Row>

         <Row className="responsive">
             <Col xs={6}>
             <img className="small" src={institute} alt="" />
             </Col>
             <Col xs={6}>
             <h4 className="center">We’re a small team who are all sharing mutual passion for learning education of Nursing</h4>
             <h4 className="center">We’re all working remotely and enjoying it since 2013</h4>
             </Col>
         </Row>

        </Container>

        </div>
    );
};

export default AboutUs;