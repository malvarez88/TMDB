import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function ButtonAppBar() {


  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
      
          <Typography className='logo' variant="h6" component="div" sx={{ flexGrow: 1}}>
            <h1 className='logo'>
            inDB
              
            </h1>
          </Typography>
          <Button  color="inherit">
            <Link to='/login'>
            Login
            </Link>
            </Button>
          <Button  color="inherit">
          <Link to='/register'>
            Register
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




// <Button variant="contained" color="primary">
//     <Link to="/about">
//         About Page
//     </Link>
// </Button>