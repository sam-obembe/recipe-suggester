import React, {Component} from 'react'
import Editbox from './Editbox'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import './ingredients.css'
import axios from 'axios';


class Ingredients extends Component{
  constructor(props){
    super(props);
    this.state = {
      //shoppingList :[],
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
      <p key ={id} onClick = {()=>this.props.addShopping(ingredient.original)} >
      {ingredient.original}
      </p>
      ) 
    
     })
    return ingredientsDisplay
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
        <CardHeader title="Ingredients"/>

        <CardContent>
          {this.ingredientLister()}
        </CardContent>

          <CardActions>
          <Button onClick = {()=> this.editToggle()}>Edit</Button>
          </CardActions>
   
        {editBoxDisplay()}
      </Card>
    )
  }
}

export default Ingredients;