
var axios = require('axios')
let recipes = [];
let id = 0;
axios.defaults.headers.common['Authorization'] = "07b6b6d2d8msh04e163123f26a56p158aeejsnf964ad342355"


module.exports = {
  retrieve: (req,res)=>{
    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert").then(result => recipes.push(result)).catch("can't get recipe");
    res.status(200).send(recipes)
  },
  recipes
}



// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert")
// .header("X-RapidAPI-Key", "07b6b6d2d8msh04e163123f26a56p158aeejsnf964ad342355")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });