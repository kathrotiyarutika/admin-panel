import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Shop
              <StoreMallDirectoryIcon />
            </Typography>
            <Stack spacing={2} direction="row">
              <Button
                component={NavLink}
                to="/"
                style={({ isActive }) => {
                  return { background: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
              >
                Home
              </Button>
              <Button
                component={NavLink}
                to="/contact"
                style={({ isActive }) => {
                  return { background: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
              >
                Contact
              </Button>
              <Button
                component={NavLink}
                to="/loginReg"
                style={({ isActive }) => {
                  return { background: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
              >
                Login/Registration
              </Button>
              <Button
                component={NavLink}
                to="/tour"
                style={({ isActive }) => {
                  return { background: isActive ? "#6d1b7b" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
              >
                Tour
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
