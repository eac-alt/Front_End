import React,{Component} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


const recipeTitleRegex = RegExp( 
  /^[A-Za-z]{5,30}$/)
  
  const ingredientsRegex = RegExp(
  /^[A-Za-z]{3,30}/)
  
  const methodRegex = RegExp(
  /^\W*(?:\w+\b\W*){10,400}$$/)
  
  const cookTimeRegex = RegExp(
  /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/)
  
  const prepTimeRegex = RegExp(
  /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/)
  
  const PricePerUnitRegex = RegExp(
 /^£?(([1-9]{1,3}(,\\d{3})*(\\.\\d{2})?)|(0\\.[1-9]\\d)|(0\\.0[1-9]))$/)
  
  
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
        Ingredient: null,
        IngredientAmount: null,
        Method: null,
        CookTime: null,
        PrepTime: null,
        PricePerUnit: null,
        formErrors: {
          recipeName: "",
          Ingredient: "",
          IngredientAmount:"",
          Method: "",
          CookTime: "",
          PrepTime: "",
          PricePerUnit: ""
          
        }
      };
    }
    handleSubmit = e => {
      e.preventDefault();
  
      if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          Recipe Name: ${this.state.recipeName}
          Ingredient: ${this.state.Ingredient}
          IngredientAmount: ${this.state.IngredientAmount}
          Method: ${this.state.method}
          CookTime: ${this.state.cookTime}
          PrepTime:${this.state.prepTime}
          PricePerUnit:${this.state.PricePerUnit}
        `);
      } else {
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
        case "ingredients":
          formErrors.ingredients = ingredientsRegex.test(value)
    ? ""
            : "Minimum 5 characters, maximum 30 characters required";
          break;
           
        case "method":
          formErrors.method = methodRegex.test(value)
            ? ""
            : "Minimum 100 words, maximum 400 words required";
          break;
        case "cookTime":
          formErrors.cookTime = cookTimeRegex.test(value)
           ? ""
            : "Minimum 100 words, maximum 400 words required";
          break;
    case "prepTime":
          formErrors.prepTime = prepTimeRegex.test(value)
           ? ""
            : "Minimum 100 words, maximum 400 words required";
          break;
    case "pricePerUnit":
          formErrors.pricePerUnit = PricePerUnitRegex.test(value)
           ? ""
            : "Minimum 100 words, maximum 400 words required";
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
              <label htmlFor="Name">Recipe Name</label>
              <input
                class= "form-control"
                className={formErrors.recipeName.length > 0 ? "error" : null}
                placeholder="Recipe Name"
                type="name"
                name="recipe name"
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
                <Form.Label>Ingredient Name</Form.Label>
                <Form.Control type="ingredient name" placeholder="Enter ingredient name i.e sugar" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="IngredientAmount">
              <div className="Quantitiy">
              <label htmlFor="Amount">Quantitiy</label>
              <input
                class= "form-control"
                className={formErrors.IngredientAmount.length > 0 ? "error" : null}
                placeholder="Ingredient Amount"
                type="quantity"
                name="quantity"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.IngredientAmount.length > 0 && (
                <span className="errorMessage">{formErrors.IngredientAmount}</span>
              )}
            </div>

              </Form.Group>
      
            </Col>
          </Row>
        
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Add ingredient" />
        </Form.Group>
  
  
        <Form.Group controlId="formBasicRecipeMethod">
          <Form.Label>Method</Form.Label>
          <Form.Control as="textarea" rows="3" type="Method" placeholder="Enter recipe method" />
          <small>Max 400 words</small>
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
     
   
  
        
       )
    }
    }

  