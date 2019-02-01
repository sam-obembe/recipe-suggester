import React, {Component} from 'react'
import Saved from './Saved'
import axios from 'axios';
import './recipe.css';



class Recipe extends Component{
  constructor(props){
    super(props);
    this.state = {
      
      title: "",
      image: "",
      cooktime: "", 
      servings: "",
      instructions: "", 
      ingredients: {},
      savedRecipe: []
    }
  }

  clickSaver = () =>{
 
    let savedRecipe = {
      title: this.props.title,
      image: this.props.image,
      cooktime: this.props.cooktime,
      servings: this.props.servings,
      instructions: this.props.instructions,
      ingredients: this.props.ingredients
    }
    var fromServer
    axios.post("/api/recipes/save",savedRecipe).then(res => {
       fromServer = res.data
      //this.setState({savedRecipe: [res.data]})
      console.log(fromServer)
      this.setState({savedRecipe: fromServer})
    }) ;
    
  }

  render(){

    return(
      <div className = "main">
        <h3>{this.props.title}</h3>
        <img src = {this.props.image} alt = "NA" width = "250vw"/>
        <p>This recipe can be prepared in {this.props.cooktime} minutes and serves {this.props.servings} people</p>

        <p>{this.props.instructions}</p>

        <button onClick = {()=>this.clickSaver()}>Click to Save Recipe</button>

        <Saved savedRecipe = {this.state.savedRecipe}/>
      </div>
    )
  }
}

export default Recipe;