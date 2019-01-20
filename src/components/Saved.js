import React, {Component} from 'react'
import SavedItems from './SavedItems';


class Saved extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <SavedItems saved= {this.props.savedRecipies}/>
      </div>
    )
  }
}

export default Saved;