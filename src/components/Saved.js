import React  from 'react'

const Saved = (props) =>{
  return(
    <div>
      <ul>
      {props.savedRecipe.map((saved,id)=> <li key = {id}>{saved.title}</li> )}

      </ul>
      
    </div>
  )
}

export default Saved;