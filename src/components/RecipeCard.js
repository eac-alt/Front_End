import React from 'react';
import {Card,  ListGroup} from 'react-bootstrap';
import{BASE_RECIPE_URL, GET_RECIPESBYID_URL } from './components/constants'
import axios from 'axios';
import {Button} from 'react-bootstrap';


export default class MyRecipes extends React.Component {

  constructor(props) {
      super();
      this.state = {
        recipeTitle: "",
        ingredients: [],
        recipeMethod: "",
        cookTime: "",
        prepTime: "",
        pricePerUnit: "",
      }
  }

  componentDidMount() {
      axios.get(`${BASE_RECIPE_URL}${GET_RECIPESBYID_URL}`)
          .then(res => {
              console.log(res);
              this.setState({ recipeTitle: res.data });
              this.setState({ ingredients: res.data });
              this.setState({ recipeMethod: res.data });
              this.setState({ cookTime: res.data });
              this.setState({ prepTime: res.data });
              this.setState({ pricePerUnit: res.data });
          })
          .catch(err => console.warn(err));
  }


  
  render() {
      return (
          <div className='container'>
              <div className='row no-gutters card-deck'>
                      <div className='browseCard pt-1 col-3'>
                          <Card bg='dark' text='Black'>
                              <Card.Title className='m-auto'>{recipeTitle}</Card.Title>
                                <Card.Subtitle>Ingredients</Card.Subtitle>
                              <Card.Text>
                                      {ingredients}   
                                  </Card.Text>
                              <Card.Subtitle>Method</Card.Subtitle>
                              <Card.Text>
                                      {recipeMethod}   
                                </Card.Text>
                              <Card.Body>
                                  <Card.Text>
                                      Cook Time: {cookTime}
                                  </Card.Text>
                                  <Card.Text>
                                      Prep Time: {prepTime}
                                  </Card.Text>
                                  <Card.Text>
                                      Price Per Portion: {pricePerUnit}
                                  </Card.Text>
                                  <Button>t="primary"  type = "button" onClick= {()=>this.handleSubmit}>Go back to all recipes</Button>
                            </Card.Body>
                          </Card>
                      </div>)
                  )}
              </div>
          </div>
    ) 
    }
}