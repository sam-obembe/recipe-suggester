import React from 'react';
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import Icon from '@material-ui/core/Icon'


const ShoppingList =props=>{
 
  let toggleButton=()=>{
    if(props.open){
      return <Icon onClick = {()=>props.toggle()}>chevron_right</Icon>
    }
    else{
      return <Icon onClick = {()=>props.toggle()}>chevron_left</Icon>
    }
  }
  return(
   
    <Drawer 
      variant="persistent"
      open={props.open} 
      anchor="right" 
      id="shoppingList">

      { toggleButton()}
      
      <Typography variant = "h5">Shopping list</Typography>

      <ul>
        {
          props.items.map((item,id) => {
              return (
              <div key ={id}>
                <li onClick = {()=>props.remove(item)}>{item}</li>
            
              </div>
            );
          })
        }
    
      </ul>

    </Drawer>

  
  )
}

export default ShoppingList;