require("dotenv").config()
var axios = require('axios')
const auth = require('./auth')
var recipes ;

var savedRecipes = [];
let shoppingList = [];
var id = 0;
let shopid = 0;

module.exports = {
  retrieve: (req,res)=>{
  
    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1",{
      "headers":{"X-RapidAPI-Key":auth.key}
      })
      .then(response => {
      recipes= response.data.recipes ; 
      let generatedRecipe = {
        title: recipes[0].title,
        image: recipes[0].image,
        servings: recipes[0].servings,
        cooktime: recipes[0].readyInMinutes,
        ingredients: recipes[0].extendedIngredients,
        instructions: recipes[0].instructions
      };
      res.status(200).send(generatedRecipe);
  
    })
    .catch("can't get recipe"); 
    id++
  },
  
  save: (req,res)=>{
     const {title,image,servings,cooktime,ingredients,instructions} = req.body;
     let savedRec = {
      title:title,
      image:image,
      servings:servings,
      cooktime:cooktime,
      ingredients:ingredients, instructions:instructions
      };
     savedRecipes.push(savedRec);
     res.status(200).send(savedRecipes);
     id++;
     
  },

  addToShoppingList: (req,res) =>{
    const {ing} = req.body;
    shoppingList.push(ing)
    res.status(200).send(shoppingList);
  },

  removeFromShopping: (req,res) =>{
    const item = req.params.item
    let loc = shoppingList.indexOf(item)
    if(shoppingList.length <= 1){
      shoppingList = []
    } else {
      shoppingList.splice(loc,1)
    }
    res.status(200).send(shoppingList)
    
  },

  listEdit: (req,res)=>{
    let change = req.params.incoming
    shoppingList = change.split(",")
    console.log(shoppingList)
    res.send(shoppingList)
  },

  getSaved: (req,res) =>{
    res.status(200).send(savedRecipes)
  },

  getShoppingList: (req,res) =>{
    res.status(200).send(shoppingList)
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
