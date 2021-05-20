import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link , withRouter} from "react-router-dom";
import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  btn: {
    textDecoration: "none",
    color: "inherit",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const { user, onLogout } = props;
  const classes = useStyles();
  const theme = useTheme()

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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.btn} to="/artists" color="inherit">
          Artists
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.btn} to="/courses" color="inherit">
          Courses
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link className={classes.btn} to="/forchildren" color="inherit">
          For Children
        </Link>
      </MenuItem>

      {user ? (
        <>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link className={classes.btn} to="/profile" color="inherit">
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link
              className={classes.btn}
              to="/"
              onClick={onLogout}
              color="inherit"
            >
              Logout
            </Link>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link className={classes.btn} to="/login">
              Login
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link className={classes.btn} to="/register" color="inherit">
              Register
            </Link>
          </MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
    
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Button component={Link} to="/" color="inherit">
              <img width= '35px' src='../assets/logos/Logo_Master_white.png'/> TopoliArts
             </Button>
           </Typography> 
        
    
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem>
              <Link className={classes.btn} to="/artists" color="primary">
                Artists
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={classes.btn} to="/courses" color="secondary">
                Courses
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={classes.btn} to="/forchildren" color="inherit">
                For Children
              </Link>
            </MenuItem>
            {user ? (
              <>
                <MenuItem onClick={handleMobileMenuClose}>
                  <Link className={classes.btn} to="/profile" color="inherit">
                    Profile
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleMobileMenuClose}>
                  <Link
                    className={classes.btn}
                    to="/"
                    onClick={onLogout}
                    color="inherit"
                  >
                    Logout
                  </Link>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <Link className={classes.btn} to="/login">
                    Login
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link className={classes.btn} to="/register">
                    Register
                  </Link>
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


