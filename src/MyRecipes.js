import React from 'react';
import {Card,  } from 'react-bootstrap';
import{BASE_RECIPE_URL,GET_RECIPES_URL , DELETE_RECIPE_URL} from './components/constants'
import axios from 'axios';
import {Button} from 'react-bootstrap';


export default class MyRecipes extends React.Component {

  constructor(props) {
      super();
      this.state = {
          recipes: [],
         
      }
  }

  componentDidMount() {
      axios.get(`${BASE_RECIPE_URL}${GET_RECIPES_URL}`)
          .then(res => {
              console.log(res);
              this.setState({ recipes: res.data });
          })
          .catch(err => console.warn(err));
  }

  handleRemove() {

      axios.delete(`${BASE_RECIPE_URL}${DELETE_RECIPE_URL}${this.state.recipe}`).then(response => {
        console.log(response)})
    .catch(error => {
    console.warn(error);
    this.setState({ errorMessage: error.message })
    })
    this.setState({completeMessage: "Recipe " + (this.state.recipe) + " was deleted."})
}
 

  render() {
      return (
  
          <div className='container'>
              <div className='row no-gutters card-deck'>
                  {this.state.recipes.map(recipe  => (
                      <div >
                      <div className='browseCard pt-1 col-3'>
                          <Card bg='dark' text='white'>
                              <Card.Title className='m-auto'>{recipe.recipeTitle}</Card.Title> 
                              <hr>
                              </hr>
                              <Card.Subtitle>Ingredients</Card.Subtitle>
                              <Card.Text>
                              {ingredients}
                              </Card.Text>
                              <Card.Subtitle>Method</Card.Subtitle>
                              <Card.Text>
                                      {recipe.recipeMethod}   
                                </Card.Text>
                              <Card.Body>
                                  <Card.Text>
                                      Cook Time: {recipe.cookTime}
                                  </Card.Text>
                                  <Card.Text>
                                      Prep Time: {recipe.prepTime}
                                  </Card.Text>
                                  <Card.Text>
                                      Price Per Portion: {recipe.pricePerUnit}
                                  </Card.Text>
                                  <Button variant="outline-danger" type = "button" onClick={(e)=>this.handleRemove(e)}>>Delete</Button>
                                  <Button variant="outline-success" type = "button" onClick={(e)=>this.updateRecipe(e)}>>Update</Button>
                              </Card.Body>
                               </Card>
                               </div>
                      </div>)
                  )}
              </div>
          </div>
      );}
  }
