import React, {Component} from 'react'
// import SavedItems from './SavedItems';
import axios from 'axios';


class Saved extends Component{
  constructor(props){
    super(props);
    this.state = {
      // savedRecipes : [],
    }
  }
  
  componentDidMount(){
    axios.get("/api/recipes/saved").then(res => {
      this.setState({savedRecipes:res.data});
      console.log(res.data);
    })
  }
 
  deleter(id){
    axios.delete(`/api/recipes/remove/${id}`).then(res => this.setState({savedRecipes:res.data})).catch(err => err+console.log("error"))
  }
  
  render(){
    return(
      <div>
        <h3>These are saved Items</h3>
        {/* {this.state.savedRecipes&&<SavedItems saved= {this.state.savedRecipies}/>} */}
        {this.props.savedRecipe.map((saved,id) => <p key = {id} onClick = {this.deleter(id)}>{saved.title}</p>)}
      </div>
    )
  }
}

export default Saved;