import React,{Component} from 'react'
import { Form } from 'react-bootstrap';
import axios from 'axios'
import { BASE_INGREDIENT_URL , POST_INGREDIENT_URL } from './components/constants'


 

      export default class AddIngredients extends Component {
        constructor(props) {
          super(props);
          this.state = {
            ingredients: [{ingredientName:"", ingredientAmount:""}],
            }
          };
        handleSubmit = e => {
            e.preventDefault();
       
           axios.post(`${BASE_INGREDIENT_URL}${POST_INGREDIENT_URL}`, { ingredientName: this.state.ingredientName, ingredientAmount: this.state.ingredientAmount})
            .then((res) =>  {  
                console.log(res);
            })
            .catch(err => {
                console.warn(err);
                this.setState({ error: err.message })
              })
              ;
    
            handleChange = (e) => {
                if (["ingredientName", "ingredientAmount"].includes(e.target.className) ) {
                  let ingredients = [...this.state.ingredients]
                  ingredients[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
                  this.setState({ ingredients }, () => console.log(this.state.ingredients))
                } else {
                  this.setState({ [e.target.name]: e.target.value.toUpperCase() })
                }
              }
            addIngredient = (e) => {
                this.setState((prevState) => ({
                  ingredients: [...prevState.ingredients, {ingredientName:"", ingredientAmount:""}],
                }));
              }
            }
            handleSubmit = (e) => { e.preventDefault() }
            
            render() {
                let {ingredients} = this.state
                return (
                  <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <button onClick={this.addIngredient}>Add new ingredient</button>
                    <IngredientInputs ingredients={ingredients} />
                    <input type="submit" value="Submit" /> 
                </Form>
                )
                
            }
        }