import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, Menu, IconButton, Button, Typography, Toolbar, Box, AppBar } from '@mui/material';

const NavBar = (props: any) => {
  const date = Date()
  const newDate = date.toLocaleString().slice(0, 15)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutOfAccount = () => {
    handleClose()
    props.logOut()
  }

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 8 }}
            onClick={handleMenu}
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
              <NavLink to='/home'>
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </NavLink>
              <NavLink to='/answers'>
                <MenuItem onClick={handleClose}>Saved Answers</MenuItem>
              </NavLink>
              <NavLink to='/'>
                <MenuItem onClick={logoutOfAccount}>Logout</MenuItem>
              </NavLink>
          </Menu>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            Task Master
          </Typography>
          <Typography variant="h5" component="div">
            {newDate} 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar
