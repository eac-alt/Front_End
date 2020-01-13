import React,{Component} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import {BASE_RECIPE_URL,  POST_RECIPE_URL, PATCH_ADDTORECIPE_URL, BASE_INGREDIENT_URL, POST_INGREDIENT_URL } from './components/constants'
import {formValid, recipeTitleRegex, methodRegex, cookTimeRegex, prepTimeRegex, pricePerUnitRegex, }  from './components/constants'




  
  export default class CreateRecipe extends Component {
    constructor(props) {
      super(props);
      this.state = {
        recipeTitle: null,
        ingredients: [],
        recipeMethod: null,
        cookTime: null,
        prepTime: null,
        pricePerUnit: null,
        formErrors: {
          recipeTitle: "",
          recipeMethod: "",
          cookTime: "",
          prepTime: "",
          pricePerUnit: ""
          
        }
      };
    }
    addIngredient() {
      this.setState({ingredients: [...this.state.ingredients, ""]}
      )
  }
  handleIngredient(e, id) {
      this.state.ingredients[id] = e.target.value

      this.setState({ingredients: this.state.ingredients})
  }
  handleRemove(id){
      this.state.ingredients.splice(id,1)

      console.log(this.state.ingredients, "0");

      this.setState({ingredients: this.state.ingredients})
  }


  handleSubmit(e){
      axios.post(`${BASE_INGREDIENT_URL}${POST_INGREDIENT_URL}`, { ingredientName: this.state.ingredientName})
  .then((res) =>  {  
      console.log(res);
  })
  .catch(err => {
      console.warn(err);
      this.setState({ error: err.message })
    })
    ;
  }

  handleSubmit = e => {
     e.preventDefault();

    axios.post(`${BASE_RECIPE_URL}${POST_RECIPE_URL}`, { recipeTitle: this.state.recipeTitle, recipeMethod: this.state.recipeMethod,  cookTime: this.state.cookTime, prepTime: this.state.prepTime, pricePerUnit: this.state.pricePerUnit, ingredientName: this.state.ingredientName})
     .then((res) =>  {  
         console.log(res);
     })
     .catch(err => {
         console.warn(err);
         this.setState({ error: err.message })
       });

  if (formValid(this.state)) {
    console.log(`
      --SUBMITTING--
      Recipe Name: ${this.state.recipeTitle}
      recipeMethod: ${this.state.recipeMethod}
      CookTime: ${this.state.cookTime}
      PrepTime:${this.state.prepTime}
      PricePerUnit:${this.state.pricePerUnit}Max 400 words
    `);
      } 
      else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

  switch (name) {
    case "recipeTitle":
      formErrors.recipeTitle = recipeTitleRegex.test(value)
      ? ""
      : "Minimum 5 characters, maximum 30 characters required";
      break;
    case "recipeMethod":
      formErrors.recipeMethod = methodRegex.test(value)
        ? ""
        : "Minimum 10 words, maximum 400 words required";
      break;
    case "cookTime":
      formErrors.cookTime = cookTimeRegex.test(value)
        ? ""
        : "Enter cook time in the format HH:MM";
      break;
    case "prepTime":
      formErrors.prepTime = prepTimeRegex.test(value)
        ? ""
        : "Enter prep time in the format HH:MM";
      break;
    case "pricePerUnit":
      formErrors.pricePerUnit = pricePerUnitRegex.test(value)
        ? ""
        : "Enter price per unit in the format £XX.XX ";
      break;

    default:
      break;
     }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };



  render() {

    
    const { formErrors } = this.state;

    return (
        
      

      <Form onSubmit={this.handleSubmit} noValidate>

        <Form.Group controlId="formBasicRecipeTitle">
          <div className="recipeTitle" >
          <label htmlFor="recipeTitle">Recipe Name</label>
          <Form.Control type="text" placeholder="Recipe Name" 
            className={formErrors.recipeName.length > 0 ? "error" : null}
            name="recipeTitle"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.recipeName.length > 0 && (
            <span className="errorMessage">{formErrors.recipeName}</span>
          )}
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicRecipeMethod">
          <div className="recipeMethod">
          <label htmlFor="recipeMethod">Method</label>
          <Form.Control as ="textarea" type="text" placeholder="Recipe Method" 
            className={formErrors.recipeMethod.length > 0 ? "error" : null}
            name="recipeMethod"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.recipeMethod.length > 0 && (
            <span className="errorMessage">{formErrors.recipeMethod}</span>
          )}
          </div>
          <small>Max 400 words</small>
        </Form.Group>


        <Form.Group controlId="formBasicRecipeCookTime">
          <div className="cookTime">
          <label htmlFor="cookTime">CookTime</label>
          <Form.Control type="text" placeholder="Cook Time" 
            className={formErrors.cookTime.length > 0 ? "error" : null}
            name="cookTime"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.cookTime.length > 0 && (
            <span className="errorMessage">{formErrors.cookTime}</span>
          )}
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicRecipePrepTime">
        <div className="prepTime">
        <label htmlFor="prepTime">PrepTime</label>
        <Form.Control type="text" placeholder="Prep Time" 
          className={formErrors.prepTime.length > 0 ? "error" : null}
          name="prepTime"
          noValidate
          onChange={this.handleChange}
        />
        {formErrors.prepTime.length > 0 && (
          <span className="errorMessage">{formErrors.prepTime}</span>
        )}
        </div>
        </Form.Group>

        <Form.Group controlId="formBasicPricePerUnit">
          <div className="pricePerUnit">
          <label htmlFor="pricePerUnit">PricePerUnit</label>
          <Form.Control type="text" placeholder="Price Per Unit" 
            className={formErrors.pricePerUnit.length > 0 ? "error" : null}
            name="pricePerUnit"
            noValidate
            onChange={this.handleChange}
          />
          {formErrors.pricePerUnit.length > 0 && (
            <span className="errorMessage">{formErrors.pricePerUnit}</span>
          )}
          </div>
        </Form.Group>
        <Form.Group>
        <div className = "Ingredient" >
               
                <label>Ingredients</label>

                {this.state.ingredients.map((ingredient, id)=>{
                    return (
                        <div key= {id}>
                            <input type="text" onChange={(e)=>this.handleIngredient(e, id)}
                             value={ingredient}/>


                             <button type="button" onClick= {()=>this.handleRemove(id)}>Remove</button>
                        </div>
                    )
                    })
                }
                <hr />
                <button variant= "secondary" type="button" onClick={(e)=>this.addIngredient(e)}>Add Ingredient</button>
                <hr />
            
            </div>
            </Form.Group>
     
       
        <Button variant="primary" type="submit">Submit</Button>
              
          
      </Form > 

      

     ) }


          }
