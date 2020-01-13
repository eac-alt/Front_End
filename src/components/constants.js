 export const GET_RECIPE_URL ="/getAllRecipes";
// export const GET_INGREDIENT_URL =
// export const DELETE_RECIPE_URL=
// export const UPDATE_RECIPE_URL =
// export const UPDATE_INGREDIENT_URL=
export const POST_RECIPE_URL = "/createRecipe";
export const POST_INGREDIENT_URL = "/createIngredient";
export const BASE_RECIPE_URL = "http://localhost:8080/recipe";
export const BASE_INGREDIENT_URL = "http://localhost:8080/ingredient";
export const PATCH_ADDTORECIPE_URL= "/addToRecipe/{recipeId}/{ingredientId}";
export const GET_RECIPES_URL= "/getRecipe{id}"


export const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
    
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
    
    return valid;
  };


 export const recipeTitleRegex = RegExp( 
    /^[A-Za-z]{5,30}/)
  
  export  const methodRegex = RegExp(
    /^\W*(?:\w+\b\W*){10,400}/)
      
   export const cookTimeRegex = RegExp(
    /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/)
      
   export const prepTimeRegex = RegExp(
    /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/)
      
  export const pricePerUnitRegex = RegExp(
    /^£?(([1-9]{1,3}(,\\d{3})*(\\.\\d{2})?)|(0\\.[1-9]\\d)|(0\\.0[1-9]))/)



