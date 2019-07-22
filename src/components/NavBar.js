import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () =>{
  return(
    <div style = {{marginBottom:"100px"}}>
      <AppBar position ="static" color="default">
        <Toolbar>
          <p>Recipe Shuffle</p>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar