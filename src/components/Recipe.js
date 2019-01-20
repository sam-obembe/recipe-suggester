import React, {Component} from 'react'
import Saved from './Saved'



class Recipe extends Component{
  constructor(props){
    super(props);
    this.state = {
      savedRecipes: []
    }
  }

  clickSaver = () =>{
    let savedRecipe = {
      title: this.props.title,
      picture: this.props.picture,
      cooktime: this.props.cooktime,
      servings: this.props.servings,
      instructions: this.props.instructions
    }
    
    this.setState({savedRecipes: [...this.state.savedRecipes,savedRecipe]})
    
    console.log(this.state.savedRecipes)
    
  }

  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <img src = {this.props.picture} alt = "NA" width = "250vw"/>
        <p>This recipe can be prepared in {this.props.cooktime} minutes and serves {this.props.servings} people</p>

        <p>{this.props.instructions}</p>
        <button onClick = {(e)=>this.clickSaver(e)}>Click to Save Recipe</button>

        <Saved savedRecipes = {this.state.savedRecipes}/>
      </div>
    )
  }
}

export default Recipe;