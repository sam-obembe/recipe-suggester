import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon'
const NavBar = (props) =>{
  return(
   
      <AppBar id = "navBar" position ="static" color="default">
        <Toolbar id = "innerNav">
          <h2>Recipe Shuffle</h2>
          <Icon className = "myIcons" onClick = {()=>props.shopToggle()}>shopping_cart</Icon>
        </Toolbar>
      </AppBar>
   
  )
}

export default NavBar