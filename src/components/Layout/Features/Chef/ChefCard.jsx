import React from 'react';
import { Card, Button } from 'react-bootstrap';
import chefImage from '../../../../assets/images/chef_carousel (2).jpg'
import { Link } from 'react-router-dom';

const ChefCard = ({ch}) => {
  const {id,chefName} = ch;
  return (
<div>
  <h4>Choose Your Favorite Chef</h4>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={chefImage} />
      <Card.Body>
        <Card.Title>{chefName}</Card.Title>
        <Card.Text>
          Years of Experience: 10
        </Card.Text>
        <Card.Text>
          Number of Recipes: 50
        </Card.Text>
        <Card.Text>
          Likes: 1000
        </Card.Text>
        <Link to={`/${id}`}><Button variant="primary">View Recipes</Button></Link>
      </Card.Body>
    </Card>
</div>
  );
}

export default ChefCard;
