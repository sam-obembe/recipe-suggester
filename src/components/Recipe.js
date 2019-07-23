import React, {Component} from 'react'
import Saved from './Saved'
import axios from 'axios';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
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
      console.log(fromServer)
      this.setState({savedRecipe: fromServer})
    }) ;
    
  }

  render(){

    return(
 
        <Card className = "main">
          <CardHeader component ="h2" title = {this.props.title}/>
         

          <CardMedia component = "img" src ={this.props.image} id = "media"/>

          <CardContent>
            <p>This recipe can be prepared in {this.props.cooktime} minutes and serves {this.props.servings} people</p>
            <div id = "instructions">
              <p>{this.props.instructions}</p>
            </div>
            
          </CardContent>

          <CardActions>
            <Button onClick = {()=>this.clickSaver()}>Click to Save Recipe</Button>
          </CardActions>
          
          <Saved savedRecipe = {this.state.savedRecipe}/>

        </Card>
   
    )
  }
}

export default Recipe;