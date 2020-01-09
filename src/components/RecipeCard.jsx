import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {ListGroup, ListGroupItem} from 'react-bootstrap';


export function RecipeCard(data) {
return (

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data.img" />
  <Card.Body>
    <Card.Title>{data.Title}}</Card.Title>
    <Card.Text>
      <h3>Ingredients</h3> 
      {data.Ingredients}
    </Card.Text>

    <Card.Text>
    <h3>Method</h3>
     {data.Method}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cook Time {data.CookTime}</ListGroupItem>
    <ListGroupItem>Prep Time {data.PrepTime }</ListGroupItem>
    <ListGroupItem>Price Per Unit{data.PricePerUnit}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
  </Card.Body>
  <Button variant="primary" type="submit">
  Submit
</Button>
</Card> 
);
}