'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { useToggle } from '@/hooks';
import { ROUTES } from '@/constants';

export default function Header() {
  const { value: profileMenuOpen, toggle: toggleProfileMenu } = useToggle();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NovoFront App
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" href={ROUTES.home}>
            Início
          </Button>
          <Button color="inherit" href={ROUTES.dashboard}>
            Dashboard
          </Button>
          <Button color="inherit" href={ROUTES.about}>
            Sobre
          </Button>
        </Box>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={toggleProfileMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Menu
          id="profile-menu"
          anchorEl={null}
          open={profileMenuOpen}
          onClose={toggleProfileMenu}
          MenuListProps={{
            'aria-labelledby': 'profile-button',
          }}
        >
          <MenuItem onClick={toggleProfileMenu}>Perfil</MenuItem>
          <MenuItem onClick={toggleProfileMenu}>Configurações</MenuItem>
          <MenuItem onClick={toggleProfileMenu}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
