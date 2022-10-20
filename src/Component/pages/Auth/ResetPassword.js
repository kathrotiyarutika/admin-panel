import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        setError({
          status: true,
          msg: "Password Reset Successfully.Redirecting to Login Page !!",
          type: "success",
        });
        document.getElementById("resetpassword-form").reset();
        setTimeout(() => {
          navigate("/loginReg");
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "Please Provide valid Password",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <br />
          <h1>Reset Password</h1>
          <Box
            component="form"
            sx={{ m: 1 }}
            id="resetpassword-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              id="password"
              name="password"
              label="New Password"
              type="password"
              style={{ marginTop: "2em" }}
            />
            <TextField
              required
              fullWidth
              id="password_confirmation"
              name="password_confirmation"
              label="New Confirm Password"
              type="password"
              style={{ marginTop: "2em" }}
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Save
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

export default ResetPassword;
