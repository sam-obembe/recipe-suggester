import React, {Component} from 'react'
import axios from 'axios'
import './Body.css'


class Edit extends Component {
  constructor(props){
    super(props);
    this.state = {
      toEdit : this.props.values,
      toSend : ""
    }
  }



  changeHandler = (e)=>{
    this.setState({toEdit: e})
  }

  saveShoppingList = () =>{
    this.setState({toSend: this.state.toEdit})
    axios.put(`/api/shoppingList/edit/${this.state.toEdit}`).then(res =>{
      console.log(res.data)
    })
  }

  render(){
    return(
      <div>
        <textarea type = "text" id = "input" value = {this.state.toEdit}  onChange = {(e)=>this.changeHandler(e.target.value)}></textarea>

        <button onClick = {()=>this.saveShoppingList()}>saveChanges</button>
      </div>
    )
  }
}

export default Edit