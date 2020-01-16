import React from 'react';
import { Card } from 'react-bootstrap';
import { BASE_RECIPE_URL, GET_RECIPES_URL, DELETE_RECIPE_URL, PUT_RECIPE_URL } from './components/constants'
import axios from 'axios';
import { Button } from 'react-bootstrap';




export default class MyRecipes extends React.Component {

    constructor(props) {
        super(); 
        this.state = {
            recipes: [],
            showEdit: false,
        }
    }

    showModal = (id) =>
        {
            debugger;
            this.setState({ showEdit:true });
            
        }


    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = () => {
        axios.get(`${BASE_RECIPE_URL}${GET_RECIPES_URL}`)
            .then(res => {
                console.log(res);
                this.setState({ recipes: res.data });
            })
            .catch(err => console.warn(err));
    }

    handleRemove(id) {
        debugger;
        axios.delete(`${BASE_RECIPE_URL}${DELETE_RECIPE_URL}${id}`)
        .then(response => {
            console.log(response);
            this.getRecipes();
        })
            .catch(error => {
                console.warn(error);
                this.setState({ errorMessage: error.message })
            })
        this.setState({ completeMessage: "Recipe " + (this.state.recipe) + " was deleted." })
    }

    updateRecipe(id) {
        debugger;
        axios.put(`${BASE_RECIPE_URL}${PUT_RECIPE_URL}${id}`).then(response => {
            console.log(response);
            this.updateRecipes();
        })
            .catch(error => {
                console.warn(error);
                this.setState({ errorMessage: error.message })
            })
        this.setState({ completeMessage: "Recipe " + (this.state.recipe) + " was updated." })
    }

    updateClicked(id) {
        this.props.history.push(`/EditRecipe/${id}`);
    }

    render() {
        return (

            <div className='container'>
                <div className='row no-gutters card-deck'>
                    {this.state.recipes.map((recipe, i) => (
                        <div key={i} className="col-4">
                            <div className='browseCard pt-1'>
                                <Card bg='dark' text='white'>
                                    <Card.Title className='m-auto'>{recipe.recipeTitle} </Card.Title>
                                    <hr>
                                    </hr>
                                    <Card.Subtitle>Ingredients</Card.Subtitle>
                                    
                                    <ul className="list-group list-group-flush">
                                        {recipe.ingredients.map(ing =>
                                            <li key={ing.ingredientId} class="list-group-item" style={{"background-color": "#343a40"}}>{ing.ingredientName}</li>
                                        )}
                                    </ul>
                                    <Card.Text>
                                        {recipe.ingredients.ingredientName}
                                        
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
                                        <Button variant="outline-danger" type="button" onClick={(e) => this.handleRemove(recipe.recipeId)}>>Delete</Button>
                                        <Button variant="outline-success" type="button" onClick={(e) => this.updateClicked(recipe.recipeId)}>> Update </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
        );
    }
}
