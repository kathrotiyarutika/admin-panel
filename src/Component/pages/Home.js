import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import List from "../../CURD/List";

export const useStyle = makeStyles({
  margin: {
    margin: "20px 50px 40px 50px",
    width: "80%",
    marginLeft: "28rem",
  },
});
function Home() {
  const classes = useStyle();
  return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }}>Welcome to Home Page!! 🏘️</h1>
      <Grid container justify="center">
        <Grid item xs={12} className={classes.margin}>
          <List />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
