import React, {Component} from 'react'
import ShoppingList from './ShoppingList'
import Editbox from './Editbox'
import './ingredients.css'
import axios from 'axios';


class Ingredients extends Component{
  constructor(props){
    super(props);
    //set ingredients state to props.ingredientsArray
    this.state = {
      shoppingList :[],
      ingredients: [],
      basket:[],
      displayEditBox: false
    }
  }

  componentDidMount(){
    this.setState({ingredients:this.props.ingredientsArray});
    axios.get("/api/shoppingList").then(res =>{
      this.setState({ShoppingList: res.data})
    })
   
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
    
    //console.log(ingredientsDisplay)
    return ingredientsDisplay
  }

  shoppingListAdd = (ing)=>{
    //replace this with axios request posting shopping item to back end
   
    //this.setState({shoppingList:[...this.state.shoppingList,e]})
    console.log(ing)
    axios.post("/api/shoppingList/add", {ing}).then(res =>{
      //console.log(res.data)
      this.setState({shoppingList: res.data})
    })
    console.log(this.state.shoppingList);
  }

  shoppingListRemove = (item) =>{
    //console.log(item.target.textContent)
    let toSend = item.target.textContent
    axios.delete(`/api/shoppingList/remove/${toSend}`).then(res =>{
      this.setState({shoppingList: res.data})
    })
    // let newList = this.state.shoppingList
    // newList.splice(newList.indexOf(item),1)
    // this.setState({shoppingList:newList})
    console.log(this.state.shoppingList)
  }

  editToggle = () =>{
    if(this.state.displayEditBox){
      this.setState({displayEditBox: false})
    } else{
      this.setState({displayEditBox:true})
    }
    
  }

  

  
  //return list of ingredients
  render(){
  
    const editBoxDisplay= ()=>{
      if(this.state.displayEditBox){
        return <Editbox values = {this.state.shoppingList}/>
      } else{
        return <div></div>
      }
      
    }
    return(
      <div className = "mainIngredients main">
        <h2>Ingredients</h2>
        {this.ingredientLister()}
        <ShoppingList items = {this.state.shoppingList} itemDeleter = {this.shoppingListRemove} />
        
        <button onClick = {()=> this.editToggle()}>Edit</button>

        {editBoxDisplay()}
      </div>
    )
  }
}

export default Ingredients;