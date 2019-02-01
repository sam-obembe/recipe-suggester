import React  from 'react'
// import SavedItems from './SavedItems';
//import axios from 'axios';

const Saved = (props) =>{
  return(
    <div>
      <ul>
      {props.savedRecipe.map((saved,id)=> <li key = {id}>{saved.title}</li> )}

      </ul>

      {/* <h3>These are saved Items</h3> */}
      
    </div>
  )
}

// class Saved extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       savedRecipes : this.props.savedRecipe,
//     }
//   }
  
//   componentDidMount(){
    
//     // axios.get("/api/recipes/saved").then(res => {
//     //   this.setState({savedRecipes:res.data});
//     //   console.log(res.data);
//     //   console.log(this.state.savedRecipes)
//     // })
//     this.setState({savedRecipes : this.props.savedRecipe})
//     console.log(this.state.savedRecipes)
    
//   }
 
//   deleter(id){
//     axios.delete(`/api/recipes/remove/${id}`).then(res => this.setState({savedRecipes:res.data})).catch(err => err+console.log("error"))
//   }

//   recipeLister = ()=>{
//     this.state.savedRecipes.map((saved,id) => {
//       return(
//         <p key = {id} onClick = {this.deleter(id)}>{saved.title}</p>
  
//       )
    
//     })
//   }
  
//   render(){
    
//     return(
//       <div>
//         <h3>These are saved Items</h3>
//         {/* {this.state.savedRecipes&&<SavedItems saved= {this.state.savedRecipies}/>} */}
//         {()=> this.recipeLister()}
//       </div>
//     )
//   }
// }

export default Saved;