import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import CommonService from "../../../common/CommonService";

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && passwordConfirm) {
      if (password === passwordConfirm) {
        setError({
          status: true,
          msg: "Registration success",
          type: "success",
        });
        document.getElementById("registration-form").reset();
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
    setTimeout(() => {
      CommonService.httpPostRequestBody(
        "http://103.206.139.86:5000/api/v1/users/signup",
        JSON.stringify({
          name,email,password,passwordConfirm
        }),
        false
      ).then((response) => {
        if (response) {
          console.log("successfully register");
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          localStorage.setItem("token", JSON.stringify(response.data.token));
          console.log(response.data.token);
        }
      });

      navigate("/loginReg");
    }, 3000);
  };
  return (
    <>
      <Box
        component="form"
        sx={{ m: 1 }}
        id="registration-form"
        noValidate
        style={{ marginRight: "3rem" }}
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
          style={{ marginTop: "2em" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          err
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          style={{ marginTop: "2em" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          style={{ marginTop: "2em" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          style={{ marginTop: "2em" }}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
          style={{ fontWeight: "bold" }}
          label="I agree to term and condition."
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Join
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default Registration;
