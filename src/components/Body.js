import React, {Component} from 'react'
import Recipe from './Recipe'
import Ingredients from './Ingredients'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import './Body.css'


class Body extends Component{
  constructor(){
    super();
    this.state = {
      recipe: "",
    }
  }
  componentDidMount(){
    this.recipeGetter();
  }

  recipeGetter = () =>{
    this.setState({recipe:""});
    axios.get("/api/recipes").then(res => {
    this.setState({recipe:res.data});
    })
  }
 

  reset=()=>{
    this.setState({recipe:{}});
    window.location.reload();
  }

  render(){

    let {title,image,cooktime,servings,instructions,ingredients} = this.state.recipe

    return(
      <div>
        <Button onClick = {()=>this.recipeGetter()}>Shuffle</Button>
        <Recipe title = {title} image = {image} cooktime = {cooktime} servings = {servings} instructions = {instructions} refresh = {this.recipeGetter}/>
        {/* <Nutrients />  */}
       {ingredients&& <Ingredients ingredientsArray = { ingredients} shuffler = {this.recipeGetter}/>}
       
       
      </div>
    )
  }
}

export default Body;