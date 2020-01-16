 export const GET_RECIPE_URL ="/getAllRecipes";
export const POST_RECIPE_URL = "/createRecipe";
export const POST_INGREDIENT_URL = "/createIngredient";
export const BASE_RECIPE_URL = "http://localhost:8080/recipe";
export const BASE_INGREDIENT_URL = "http://localhost:8080/ingredient";
export const GET_RECIPES_URL= "/getAllRecipes";
export const DELETE_RECIPE_URL= "/deleteRecipe/"
export const PUT_RECIPE_URL= "/updateRecipe"





 export const recipeTitleRegex = RegExp( 
    /^\W*(?:\w+\b\W*){1,5}/)
  
  export  const methodRegex = RegExp(
    /^\W*(?:\w+\b\W*){10,1000}/)
      
   export const cookTimeRegex = RegExp(
    /^(0[0-9]|[0-9]|2[0-3]|[0-9]):[0-5][0-9]/)
      
   export const prepTimeRegex = RegExp(
    /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/)
      
  export const pricePerUnitRegex = RegExp(
    /^£?(([0-9]{1,3}(,\\d{3})*(\\.\\d{2})?)|(0\\.[1-9]\\d)|(0\\.0[1-9]))/)



