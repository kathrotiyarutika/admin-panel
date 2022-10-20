import React from "react";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./Auth/ChangePassword";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    navigate("/loginReg");
  };

  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <br />
          <h2>
            Dashboard
            <DashboardCustomizeRoundedIcon />
          </h2>

          <br />
          <Typography variant="h5">Email: Rutika@gmail.com</Typography>
          <Typography variant="h6">Name: Rutika kathrotiya</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
