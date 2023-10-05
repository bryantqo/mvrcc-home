// This is the menu component that will be used to navigate the app
// It uses the mui library to create the menu

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box, Menu, MenuItem, Tooltip, } from '@mui/material';
// Impot VerticalDivider from '@mui/material/Divider';


import MenuIcon from '@mui/icons-material/Menu';


const pages = [
  { title: 'About', internal: "about" }, 
  { title: 'Field', internal: "field" },
  { title: 'Safety', internal: "safety" },
  { title: 'Bylaws', internal: "bylaws" },
  { title: 'Membership', internal: "membership" },
  { title: "Facebook", external: "https://www.facebook.com/midvarc" }
];

const VerticalDivider = () => {
  return (
    <Box sx={{
      height: '50px',
      width: '1px',
      backgroundColor: 'white',
      alignSelf: 'center',
      marginLeft: '10px',
      marginRight: '10px',
    }}
    />
  );
}

const AppMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderLink = (page) => {
    if (page.external) {
      return (
        <Link to={`${page.external}`} external>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {page.title}
          </Typography>

        </Link>
      )
    } else {
      return (

        <Link to={`/${page.internal}`} >
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {page.title}
          </Typography>
        </Link>
      )
    }
  }

  const renderLinks = () => {
    return pages.map((page) => {
      return (<MenuItem key={page} onClick={handleCloseNavMenu}>
        {renderLink(page)}
      </MenuItem>
      )
    })
  }

  return (
    <AppBar position="static" className='noPrint'  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            verticalAlign: 'middle'
          }}
          >

            <img src="./logo.svg" alt="MVRCC Logo" style={{ height: '50px', width: '50px', marginRight: '10px' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="./index.html"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                verticalAlign: 'middle',
                flexShrink: 1,
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            >
              Mid-Virginia Radio Control Club
            </Typography>
            <VerticalDivider />
          </Box>



          <Box sx={{ flexShrink: 1, display: { xs: 'flex', md: 'none' }, alignSelf: 'left', marginLeft: 0 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {renderLinks()}
            </Menu>
          </Box>

          { // Show the logo
          }
          <Box sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            verticalAlign: 'middle',
          }}
          >
            <img src="./logo.svg" alt="MVRCC Logo" style={{ height: '50px', width: '50px', marginRight: '10px' }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="./index.html"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                verticalAlign: 'middle',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            >
              MVRCC
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.internal ? `/${page.internal.toLowerCase()}` : page.external} external={page.external}>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    {page.title}
                  </Typography>
                </Link>
              </Button>
            ))
            }
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppMenu;