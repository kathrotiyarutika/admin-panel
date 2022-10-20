import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const SendPasswordResetEmail = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      console.log(actualData);
      setError({
        status: true,
        msg: "Password Reset Email Sent. Check Your Email !!",
        type: "success",
      });
      document.getElementById("sendreset-form").reset();
    } else {
      setError({
        status: true,
        msg: "Please Provide valid Email",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <br />
          <h1>Reset Email</h1>
          <Box
            component="form"
            sx={{ m: 1 }}
            id="sendreset-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              style={{ marginTop: "2em" }}
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Send
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SendPasswordResetEmail;
