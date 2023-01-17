import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {Menu, Button, Box, IconButton, Toolbar, Container, AppBar, Typography, Grow, Grid, MenuItem } from '@material-ui/core';
import useStyles from './styles'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";




function App() {
  const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);  
    const handleOpenNavMenu = (e) => {
      setAnchorElNav(e.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  
  return (
    <div className="App">
              <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
              <Toolbar disableGutters >
                <Typography className={classes.heading} variant='h2' align="center"><Header /></Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              sx={{border: "4px solid grey", borderRadius: 1}}
            >

                <MenuIcon className='menuicon'/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}             
            >
          <MenuItem component={Link} to='/' onClick={handleCloseNavMenu}> Home</MenuItem>
          <MenuItem component={Link} to='/newsfeed' onClick={handleCloseNavMenu}> Newsfeed</MenuItem>
          <MenuItem component={Link} to='/about' onClick={handleCloseNavMenu}> About Us</MenuItem>
          <MenuItem component={Link} to='/login' onClick={handleCloseNavMenu}> Login</MenuItem>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              </Button>
          </Box>
            </Menu>
            </Box>
              </Toolbar>
            </AppBar>
            <Grow in >
                <Container>
                        <Grid item xs={12} sm={7}>
                            <Main />                
                        </Grid>
                </Container>
            </Grow>
        </Container>
      <Footer />
    </div>
  );
}

export default App;
