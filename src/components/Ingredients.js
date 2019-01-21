import React, {Component} from 'react'
import ShoppingList from './ShoppingList'
import './ingredients.css'
// import Axios from 'axios';

class Ingredients extends Component{
  constructor(props){
    super(props);
    //set ingredients state to props.ingredientsArray
    this.state = {
      shoppingList :[],
      ingredients: this.props.ingredientsArray,
      basket:[]
    }
  }

 

  //create a function to list ingredients from this.state.ingredients
  ingredientLister =()=>{
   
    let ingredientsDisplay = this.state.ingredients.map((ingredient,id) =>{
      return (
      <p key ={id} onClick = {()=>this.shoppingListAdd(ingredient.original)} >
      {ingredient.original}
      </p>
      ) 
     })
    
    // ) 
    // console.log(ingredientsDisplay)
    return ingredientsDisplay
  }

  shoppingListAdd = (e)=>{
    this.setState({shoppingList:[...this.state.shoppingList,e]})
    console.log(this.state.shoppingList);
  }

  shoppingListRemove = (e) =>{
    let newList = this.state.shoppingList
    newList.splice(newList.indexOf(e),1)
    this.setState({shoppingList:newList})
    console.log(this.state.shoppingList)
  }

  
  //return list of ingredients
  render(){
    console.log(this.state.ingredients)
    console.log(this.props)
    return(
      <div className = "main">
        <h2>Ingredients</h2>
        {this.ingredientLister()}
        <ShoppingList items = {this.state.shoppingList} itemDeleter = {this.shoppingListRemove}/>
      </div>
    )
  }
}

export default Ingredients;