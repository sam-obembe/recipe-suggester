import React, {Component} from 'react'
import Recipe from './Recipe'
import Ingredients from './Ingredients'
import axios from 'axios'
import './Body.css'
import ShoppingList from './ShoppingList'
import NavBar from './NavBar'
import Icon from '@material-ui/core/Icon'
class Body extends Component{
  constructor(){
    super();
    this.state = {
      recipe: "",
      shoppingList:[],
      showShopping:false
    }
  }
  componentDidMount(){
    this.recipeGetter();
    this.getShopping();
  }

  recipeGetter =()=> {
    this.setState({recipe:""});
    axios.get("/api/recipes").then(res => {
    this.setState({recipe:res.data});
    })
  }
  
  getShopping =()=> {
    axios.get("/api/shoppingList")
    .then(res=>{
      this.setState({shoppingList:res.data});
    })
    .catch(err=>console.log(err));
  }

  addShopping =(e)=> {
    axios.post("/api/shoppingList/add", {ing:e}).then(res =>{
      this.setState({shoppingList: res.data})
    })
  }

  removeShopping=(e)=>{
    axios.delete(`/api/shoppingList/remove/${e}`).then(res =>{
      this.setState({shoppingList: res.data})
    })
  }

  reset=()=>{
    this.setState({recipe:{}});
    window.location.reload();
  }

  toggleShopping=()=>{
    let {showShopping} = this.state
    this.setState({showShopping:!showShopping})
  }

  render(){

    let {title,image,cooktime,servings,instructions,ingredients} = this.state.recipe

    return(
      <div className = "bodyMain">
        <NavBar shopToggle = {this.toggleShopping}/>
        <Icon className = "myIcons"onClick = {()=>this.recipeGetter()}>refresh</Icon>
        <div>
        <Recipe title = {title} 
        image = {image} cooktime = {cooktime} 
        servings = {servings} instructions = {instructions} 
        refresh = {this.recipeGetter}/>

       {ingredients&& <Ingredients ingredientsArray = { ingredients} shuffler = {this.recipeGetter} addShopping={this.addShopping}/>}

       </div>

       <ShoppingList 
       items = {this.state.shoppingList} 
       remove ={this.removeShopping} 
       open={this.state.showShopping}
       toggle={this.toggleShopping}
       />
       
      </div>
    )
  }
}

export default Body;