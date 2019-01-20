import React from 'react';

const ShoppingList = (props) =>{
  return(
    <div>
      <h1>Shopping list component</h1>
      <ul>
      
      {props.items.map((item,id) => {
          return <li key ={id} onClick = {props.itemDeleter}>{item}</li>;
        })}
    
    </ul>
    </div>

  
  )
}

export default ShoppingList;