import React, {Component} from 'react'
import Recipe from './Recipe'
import Nutrients from './Nutrients'
import Ingredients from './Ingredients'
import recipes from './sampledata';
import axios from 'axios'

import './Body.css'

let importedRecipe=recipes;


class Body extends Component{
  constructor(){
    super();
    //set state of recipe to imported recipe object data
    this.state = {
        recipe: importedRecipe
    }
  }
  componentDidMount(){
    axios.get("https://localhost:5001/api/recipes").then(res => {console.log(res);
     importedRecipe = res})
  }
  
  render(){
    //simplify recip list name to recipeData
    let recipeData = this.state.recipe.recipes[0]

    //deconstruct recipeData
    let {title,image,readyInMinutes,servings,instructions,extendedIngredients} = recipeData
    console.log(this.state.recipe.recipes[0])

    return(
      <div>
        {/* assign recipe title, name, picture, servings and instructions to Recipe component as props */}
        <Recipe title = {title} picture = {image} cooktime = {readyInMinutes} servings = {servings} instructions = {instructions}/>
        <Nutrients />

        {/* assign array of extendedIngredients as props to Ingredients component */}
        <Ingredients ingredientsArray = {extendedIngredients}/>
      </div>
    )
  }
}

export default Body;