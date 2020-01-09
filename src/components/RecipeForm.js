import React from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


export const RecipeForm = () => (
    <div>
      <h1>Create a Recipe</h1>
  
      <Form>
  <Form.Group controlId="formBasicRecipeName">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            required
            type="recipe name"
            placeholder="Enter recipe name" />
        </Form.Group>
  
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formBasicIngredientName">
                <Form.Label>Ingredient Name</Form.Label>
                <Form.Control type="ingredient name" placeholder="Enter ingredient name i.e sugar" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicIngredientAmount">
                <Form.Label> Quantity</Form.Label>
                <Form.Control type="quanity" placeholder="Enter ingredient quantity i.e 4 tsp" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Add ingredient" />
        </Form.Group>
  
  
        <Form.Group controlId="formBasicRecipeMethod">
          <Form.Label>Method</Form.Label>
          <Form.Control as="textarea" rows="3" type="Method" placeholder="Enter recipe method" />
          <small>Maximum 400 words</small>
        </Form.Group>
  
  
        <Form.Group controlId="formBasicRecipeCookTime">
          <Form.Label>Cook Time</Form.Label>
          <Form.Control type="Cook Time" placeholder="Enter recipe cook time in HH:MM" />
        </Form.Group>
  
        <Form.Group controlId="formBasicRecipePrepTime">
          <Form.Label>Prep Time</Form.Label>
          <Form.Control type="Prep Time" placeholder="Enter recipe prep time in HH:MM" />
        </Form.Group>
  
        <Form.Group controlId="formBasicRecipePrepTime">
          <Form.Label>Price per unit</Form.Label>
          <Form.Control type="Price per unit" placeholder="Enter price per unit of recipe in £.p" />
        </Form.Group>
  
  
        <Button variant="primary" type="submit">
          Submit
  </Button>
  
      </Form>
     
     </div>
  )