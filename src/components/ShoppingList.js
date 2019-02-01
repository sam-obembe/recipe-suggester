import React from 'react';


const ShoppingList = (props) =>{
  
  return(
    <div>
      <h1>Shopping list component</h1>
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