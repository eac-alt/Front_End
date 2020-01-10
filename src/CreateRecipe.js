import React,{Component} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';





      const recipeTitleRegex = RegExp( 
      /^[A-Za-z]{5,30}/)
      
      const ingredientsRegex = RegExp(
      /^[A-Za-z]{3,30}/)
      
      const ingredientAmountRegex = RegExp (
        /^[A-Za-z]{3,30}/ )

      const methodRegex = RegExp(
      /^\W*(?:\w+\b\W*){10,400}/)
      
      const cookTimeRegex = RegExp(
      /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/)
      
      const prepTimeRegex = RegExp(
      /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/)
      
      const pricePerUnitRegex = RegExp(
      /^£?(([1-9]{1,3}(,\\d{3})*(\\.\\d{2})?)|(0\\.[1-9]\\d)|(0\\.0[1-9]))/)
      
  
      const formValid = ({ formErrors, ...rest }) => {
        let valid = true;
      
        Object.values(formErrors).forEach(val => {
          val.length > 0 && (valid = false);
        });
      
        Object.values(rest).forEach(val => {
          val === null && (valid = false);
        });
      
        return valid;
      };
    
    
    export default class CreateRecipe extends Component {
      constructor(props) {
        super(props);
        this.state = {
          recipeName: null,
          ingredient: null,
          ingredientAmount: null,
          recipeMethod: null,
          cookTime: null,
          prepTime: null,
          pricePerUnit: null,
          formErrors: {
            recipeName: "",
            ingredient: "",
            ingredientAmount:"",
            recipeMethod: "",
            cookTime: "",
            prepTime: "",
            pricePerUnit: ""
            
          }
        };
      }

    handleSubmit = e => {
       e.preventDefault();

      // axios.post(`${BASE_URL}${USER_URL}${LOGIN_URL}`, { username: this.state.username, password: this.state.password })
      // .then((res) => {
      //     localStorage.setItem(JWT, res.data.token);
      //     console.log(res);
      //     this.props.changeUserFunc(res.data.name);
      //     this.props.history.push('');
      // })
      // .catch(err => {
      //     console.warn(err);
      //     this.setState({ error: err.message })
      // });

  
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Recipe Name: ${this.state.recipeName}
        Ingredient: ${this.state.ingredient}
        IngredientAmount: ${this.state.ingredientAmount}
        recipeMethod: ${this.state.recipeMethod}
        CookTime: ${this.state.cookTime}
        PrepTime:${this.state.prepTime}
        PricePerUnit:${this.state.pricePerUnit}
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
      case "recipeName":
        formErrors.recipeName = recipeTitleRegex.test(value)
        ? ""
        : "Minimum 5 characters, maximum 30 characters required";
        break;
      case "ingredient":
        formErrors.ingredient = ingredientsRegex.test(value)
          ? ""
          : "Minimum 3 characters, maximum 30 characters required";
        break;
      case "ingredientAmount":
        formErrors.ingredientAmount = ingredientAmountRegex.test(value)
          ? ""
          : "Minimum 3 characters, maximum 30 characters required";
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

          <Form.Group controlId="formBasicRecipeName">
            <div className="recipeName">
            <label htmlFor="recipeName">Recipe Name</label>
            <input
              class= "form-control"
              className={formErrors.recipeName.length > 0 ? "error" : null}
              placeholder="Recipe Name"
              type="text"
              name="recipeName"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.recipeName.length > 0 && (
              <span className="errorMessage">{formErrors.recipeName}</span>
            )}
            </div>
          </Form.Group>

          <Row>

            <Col>
              <Form.Group controlId="formBasicIngredientName">
              <div className="ingredient">
              <label htmlFor="ingredient">Ingredient</label>
              <input
                class= "form-control"
                className={formErrors.ingredient.length > 0 ? "error" : null}
                placeholder="Ingredient Name"
                type="text"
                name="ingredient"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ingredient.length > 0 && (
              <span className="errorMessage">{formErrors.ingredient}</span>
              )}
              </div>
              </Form.Group>
            </Col>
              
            <Col>
              <Form.Group controlId="formBasicIngredientAmount">
              <div className="ingredientAmount">
              <label htmlFor="ingredientAmount">Quantity</label>
              <input
                class= "form-control"
                className={formErrors.ingredientAmount.length > 0 ? "error" : null}
                placeholder="Ingredient Amount"
                type="text"
                name="ingredientAmount"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ingredientAmount.length > 0 && (
                <span className="errorMessage">{formErrors.ingredientAmount}</span>
              )}
              </div>
              </Form.Group>
            </Col>

          </Row>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Add ingredient" />
          </Form.Group>


          <Form.Group controlId="formBasicRecipeMethod">
            <div className="recipeMethod">
            <label htmlFor="recipeMethod">Method</label>
            <input
              class= "form-control" as="textarea" rows="3"
              className={formErrors.recipeMethod.length > 0 ? "error" : null}
              placeholder="Method"
              type="text"
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
            <input
              class= "form-control"
              className={formErrors.cookTime.length > 0 ? "error" : null}
              placeholder="Cook TIme"
              type="text"
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
          <input
            class= "form-control"
            className={formErrors.prepTime.length > 0 ? "error" : null}
            placeholder="Prep Time"
            type="text"
            name="prepTIme"
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
            <input
              class= "form-control"
              className={formErrors.pricePerUnit.length > 0 ? "error" : null}
              placeholder="Price Per Unit"
              type="text"
              name="pricePerUnit"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.pricePerUnit.length > 0 && (
              <span className="errorMessage">{formErrors.pricePerUnit}</span>
            )}
            </div>
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>

        </Form> 
      )
    }
   
}; // has to stay at the end