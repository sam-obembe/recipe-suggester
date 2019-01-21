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
      ingredients: "",
      savedRecipe: []
    }
  }

  clickSaver = () =>{
   
    // this.setState({title: this.props.title,
    //   image: this.props.image,
    //   cooktime: this.props.cooktime,
    //   servings: this.props.servings, 
    //   instructions: this.props.instructions,
    //   ingredients: this.props.ingredients})
    
      let savedRecipe = {
        title: this.props.title,
        image: this.props.image,
        cooktime: this.props.cooktime,
        servings: this.props.servings,
        instructions: this.props.instructions,
        ingredients: this.props.ingredients
      }
    let i =0;

    axios.post("/api/recipes/save",savedRecipe).then(res => {this.setState({savedRecipe:[...this.state.savedRecipe,res.data[i]]});
    i++
    console.log(res.data)}) ;
    
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