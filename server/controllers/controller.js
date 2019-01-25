
var axios = require('axios')
var unirest = require('unirest')
let recipes ;
//var genRec ;

var savedRecipes = [];
let shoppingList = [];
let id = 0;
let shopid = 0;
let key = ""



module.exports = {
  retrieve: (req,res)=>{
    
    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",{"headers":{"X-RapidAPI-Key": "insert key here"}}).then(response => {
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



    
  
