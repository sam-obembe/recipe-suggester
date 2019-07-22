import React from 'react';
import Typography from '@material-ui/core/Typography'

const ShoppingList = (props) =>{
  
  return(
    <div>
      <Typography variant = "h5">Shopping list</Typography>
      <ul>
      
      {props.items.map((item,id) => {
          return <div key ={id}>
            <li onClick = {props.itemDeleter}>{item}</li>
        
            </div>;
        })}
    
    </ul>
    </div>

  
  )
}

export default ShoppingList;