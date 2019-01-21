import React, {Component} from 'react'
import Recipe from './Recipe'
// import Nutrients from './Nutrients'
import Ingredients from './Ingredients'
// import recipes from './sampledata';
import axios from 'axios'


import './Body.css'

// let importedRecipe;


class Body extends Component{
  constructor(){
    super();
    //set state of recipe to imported recipe object data
    this.state = {
        recipe: "",
    }
    this.reset = this.reset.bind(this);
  }
  componentDidMount(){
    this.recipeGetter();
  }

  recipeGetter = () =>{
    axios.get("/api/recipes").then(res => {console.log(res);
      this.setState({recipe:res.data});
       console.log(this.state.recipe)})
  }

  reset(){
    this.setState({recipe:""});
    window.location.reload();
  }

  render(){
    //simplify recip list name to recipeData
    let recipeData = this.state.recipe;

    //deconstruct recipeData
    let {title,image,cooktime,servings,instructions,ingredients} = recipeData
    console.log(ingredients)

    return(
      <div>
        {/* assign recipe title, name, picture, servings and instructions to Recipe component as props */}
        <Recipe title = {title} image = {image} cooktime = {cooktime} servings = {servings} instructions = {instructions} refresh = {this.componentDidMount}/>
        {/* <Nutrients />  */}

        {/* assign array of extendedIngredients as props to Ingredients component */}
       {ingredients && <Ingredients ingredientsArray = { ingredients}/>}
       <button onClick = {()=>this.recipeGetter()}>Shuffle</button>
       
      </div>
    )
  }
}

export default Body;