import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const sendRecipe= async(email,recipe)=> {
  await axios.post("/api/recipes/send",{email,recipe})
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))
}

const EmailSend=(props)=> {
  let email = ""
  let {recipe} = props
  console.log(recipe)
  return(
    <div>
      <TextField label ="email" type="email" onChange = {(e)=>{
        email=e.target.value
      }}/><br></br>
      <Button onClick = {()=>{
        sendRecipe(email,recipe)
        email=""
        }}>Submit</Button>
    </div>
  )
}

export default EmailSend