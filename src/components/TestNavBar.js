import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  btn:{
    color: 'green'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const { user, onLogout } = props  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className='btn' to='/artists' color="inherit" >Artists</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className='btn' to='/courses' color="inherit" >Courses</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
      <Link className='btn' to='/forchildren' color="inherit" >For Children</Link>
      </MenuItem>
      
      
      {
        user ?(
            <MenuItem onClick={handleMobileMenuClose}>
                <Link className={classes.btn} onClick={onLogout} color="inherit" >Logout</Link>
            </MenuItem>
        ):(
            <>
                <MenuItem onClick={handleMobileMenuClose}>
                  <Link className={classes.btn} to='/login' >Login</Link>
                </MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>
                  <Link className='btn' to='/register' color="inherit" >Register</Link>
                </MenuItem>
            </>
        )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          
          
          <Typography className={classes.title} variant="h6" noWrap>
            
            <Button component={Link} to='/' color="inherit" >TopoliArts</Button>
            
          </Typography>
          
          <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem >
                <Link className='link' to='/artists' color="inherit" >Artists</Link>
              </MenuItem>
              <MenuItem >
                <Link className='btn' to='/courses' color="inherit" >Courses</Link>
              </MenuItem>
              <MenuItem >
                <Link className='btn' to='/forchildren' color="inherit" >For Children</Link>
              </MenuItem>
                {
                user ?(
                  <MenuItem >
                      <Link onClick={onLogout} color="inherit" >Logout</Link>
                  </MenuItem>
              ):(
                  <>
                      <MenuItem >
                        <Link className={classes.btn} to='/login' >Login</Link>
                      </MenuItem>
                      <MenuItem >
                        <Button  to='/register' color="inherit" >Register</Button>
                      </MenuItem>
                  </>
              )}
                
            </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

    </div>
  );
}
