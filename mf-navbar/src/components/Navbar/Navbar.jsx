import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { routes } from '../../constants/routeConstants';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (route) => {
    window.history.pushState(null, null, route);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (onlyClose, route) => {

    if (!onlyClose) {
      window.history.pushState(null, null, route);
    }

    setAnchorElUser(null);
  };

  const handleGoHome = () => {
    window.history.pushState(null, null, '/');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <StorefrontIcon
            sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}
            style={{ cursor: 'pointer' }}
            onClick={handleGoHome}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {routes.pages.map((page) => (
              <Button
                key={page.route}
                onClick={() => handleCloseNavMenu(page.route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="ver opciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon style={{ fontSize: '45px' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {routes.settings.map((setting) => (
                <MenuItem key={setting.route} onClick={() => handleCloseUserMenu(false, setting.route)}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;