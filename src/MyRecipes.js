import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import recipes from './data';

export const MyRecipes = () => (
  <div>
    <h1>My Recipes</h1>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data.img" />
  <Card.Body>
    <Card.Title>{recipes.Title}}</Card.Title>
    <Card.Text>
      <h3>Ingredients</h3> 
      {recipes.Ingredients}
    </Card.Text>

    <Card.Text>
    <h3>Method</h3>
     {recipes.Method}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cook Time {recipes.CookTime}</ListGroupItem>
    <ListGroupItem>Prep Time {recipes.PrepTime }</ListGroupItem>
    <ListGroupItem>Price Per Unit{recipes.PricePerUnit}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
  </Card.Body>
  <Button variant="primary" type="submit">
  Select
</Button>
</Card> 
);
}
</div> )