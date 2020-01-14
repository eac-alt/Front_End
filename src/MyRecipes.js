import React,{Component} from 'react'
import {Card, Button} from 'react-bootstrap';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import axios from 'axios';
import {BASE_RECIPE_URL,GET_RECIPES_URL } from './components/constants'



export default class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {

      recipeTitle: "",
        ingredients: [],
        recipeMethod: "",
        cookTime: "",
        prepTime: "",
        pricePerUnit: "",
          
        }

      };


//  componentDidMount() {
//    axios.get(`${BASE_RECIPE_URL}${GET_RECIPES_URL}`, 
//        .then(res => {
//            console.log(res);
//            this.setState({ ingredients: response.data, recipe });          



//       })
//        .catch(err => console.warn(err));
//  }
  

render() {
  return (

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>recipeTitle.recipeTitle</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>recipeMethod.recipeMethod </ListGroupItem>
    <ListGroupItem>recipeMethod.recipeMethod </ListGroupItem>
    <ListGroupItem>cookTime.cookTime</ListGroupItem>
    <ListGroupItem>pricePerUnit.pricePerUnit</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
  </Card.Body>
  <Button variant="primary" type="submit">
  ingredients.ingredients
</Button>
</Card> 
  )
}}