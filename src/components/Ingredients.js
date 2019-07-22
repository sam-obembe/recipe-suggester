import React, {Component} from 'react'
import ShoppingList from './ShoppingList'
import Editbox from './Editbox'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
//import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
//import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './ingredients.css'
import axios from 'axios';


class Ingredients extends Component{
  constructor(props){
    super(props);
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

  ingredientLister =()=>{
   
    let ingredientsDisplay = this.state.ingredients.map((ingredient,id) =>{
      return (
      <p key ={id} onClick = {()=>this.shoppingListAdd(ingredient.original)} >
      {ingredient.original}
      </p>
      ) 
    
     })
    return ingredientsDisplay
  }

  shoppingListAdd = (ing)=>{
    axios.post("/api/shoppingList/add", {ing}).then(res =>{
      this.setState({shoppingList: res.data})
    })

  }

  shoppingListRemove = (item) =>{
    let toSend = item.target.textContent
    axios.delete(`/api/shoppingList/remove/${toSend}`).then(res =>{
      this.setState({shoppingList: res.data})
    })
  }

  editToggle = () =>{
    if(this.state.displayEditBox){
      this.setState({displayEditBox: false})
    } else{
      this.setState({displayEditBox:true})
    }
    
  }

  render(){
  
    const editBoxDisplay= ()=>{
      if(this.state.displayEditBox){
        return <Editbox values = {this.state.shoppingList}/>
      } else{
        return <div></div>
      }
      
    }
    return(
      <Card className = "main">
        <CardHeader>
          <h2>Ingredients</h2>
        </CardHeader>

        <CardContent>
          {this.ingredientLister()}
          <ShoppingList items = {this.state.shoppingList} itemDeleter = {this.shoppingListRemove} />
        </CardContent>

        <CardActionArea>
          <Button onClick = {()=> this.editToggle()}>Edit</Button>
        </CardActionArea>
        {editBoxDisplay()}
      </Card>
    )
  }
}

export default Ingredients;