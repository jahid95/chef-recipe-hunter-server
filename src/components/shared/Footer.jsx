import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
       
          <Container fixed="bottom" className="bg-dark text-light py-3 mx-auto ">
            <Row>
              <Col md={6}>
                <p>&copy; 2023 TheAmericanChef</p>
              </Col>
              <Col md={6}>
                <ul className="list-unstyled d-flex justify-content-end">
                  <li className="mx-3"><a href="#">Privacy Policy</a></li>
                  <li className="mx-3"><a href="#">Terms of Service</a></li>
                  <li className="mx-3"><a href="#">Contact Us</a></li>
                </ul>
              </Col>
            </Row>
          </Container>
        
      );
};

export default Footer;