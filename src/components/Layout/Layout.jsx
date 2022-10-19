import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Layout = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#ffffffbd", color: '#181818', borderBottom: 'none'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <div>
          <AccountCircle />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;
