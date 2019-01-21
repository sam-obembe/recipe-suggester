
var axios = require('axios')
var unirest = require('unirest')
let recipes ;
//var genRec ;

var savedRecipes = [];
let shoppingList = [];
let id = 0;
let shopid = 0;
axios.defaults.headers.common['Authorization'] = "07b6b6d2d8msh04e163123f26a56p158aeejsnf964ad342355"


module.exports = {
  retrieve: (req,res)=>{
    
    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",{"headers":{"X-RapidAPI-Key": "07b6b6d2d8msh04e163123f26a56p158aeejsnf964ad342355"}}).then(response => {
      recipes = response.data.recipes; 
      let generatedRecipe = {
        title: recipes[0].title,
        image: recipes[0].image,
        servings: recipes[0].servings,
        cooktime: recipes[0].readyInMinutes,
        ingredients: recipes[0].extendedIngredients,
        instructions: recipes[0].instructions
      };
      //genRec = generatedRecipe;
      console.log(generatedRecipe);
      res.status(200).send(generatedRecipe);
  
    })
    .catch("can't get recipe"); 
  },
  
  save: (req,res)=>{
     const {title,image,servings,cooktime,ingredients,instructions} = req.body;
     let savedRec = {title:title,image:image,servings:servings,cooktime:cooktime,ingredients:ingredients, instructions:instructions};
     savedRecipes.push(savedRec);
     res.status(200).send(savedRecipes);
     id++;
     
  },

  getSaved: (req,res) =>{
    res.status(200).send(savedRecipes)
  },

  remove: (req,res) =>{
    let index = null;
    savedRecipes.forEach((rec, i) => {
      if(rec.id=== Number(req.params.id)){
        index = i
      }
    })
    savedRecipes.splice(index,1)
    res.status(200).send(savedRecipes)
  },

  adding: (req,res) => {
    const {ing} = req.body;
    let toBuy = {id: shopid, item: ing};
    shoppingList.push(toBuy)
  }


  

}



    
  //   unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert").header("X-RapidAPI-Key", "07b6b6d2d8msh04e163123f26a56p158aeejsnf964ad342355").end(function (result) {
  // console.log(result.status, result.headers, result.body
  //   )
  //   res.status(200).send(result.body)
  // });