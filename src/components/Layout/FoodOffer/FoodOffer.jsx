import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import foodImage1 from '../../../assets/images/offer (1).jpg';
import foodImage2 from '../../../assets/images/offer (2).jpg';
import foodImage3 from '../../../assets/images/offer (3).jpg';

function FoodOffer() {
  return (
    <Container className='my-5'>
      <h4>Best Offer</h4>
      <Row>
        <Col md={4}>
          <Card style={{height: '400px'}}>
            <Card.Img variant="top" src={foodImage1} style={{height: '200px'}}/>
            <Card.Body>
              <Card.Title>Food Offer 1</Card.Title>
              <Card.Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              </Card.Text>
              <Button className='mt-auto' variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{height: '400px'}}>
            <Card.Img variant="top" src={foodImage2} style={{height: '200px'}} />
            <Card.Body>
              <Card.Title>Food Offer 2</Card.Title>
              <Card.Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              </Card.Text>
              <Button className='mt-auto' variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{height: '400px'}}>
            <Card.Img variant="top" src={foodImage3} style={{height: '200px'}} />
            <Card.Body>
              <Card.Title>Food Offer 3</Card.Title>
              <Card.Text>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              </Card.Text>
              <Button className='mt-auto'  variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FoodOffer;
