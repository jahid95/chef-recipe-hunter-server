import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import galleryImage1 from '../../../assets/images/food1 (1).jpg';
import galleryImage2 from '../../../assets/images/food1 (2).jpg';
import galleryImage3 from '../../../assets/images/food1 (3).jpg';

function Gallery() {
  return (
    <Container>
      <h4>Favourite Food Gallery</h4>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img style={{height: '500px'}}variant="top" src={galleryImage1} />
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img style={{height: '500px'}}variant="top" src={galleryImage2} />
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img style={{height: '500px'}}variant="top" src={galleryImage3} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img style={{height: '500px'}}variant="top" src={galleryImage1} />
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img style={{height: '500px'}}variant="top" src={galleryImage2} />
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img style={{height: '500px'}}variant="top" src={galleryImage3} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
