import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { NavLink, useNavigate } from "react-router-dom";
import CommonService from "../../../common/CommonService";

const Login = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setError({ status: true, msg: "Login success", type: "success" });
      document.getElementById("login-form").reset();
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
    setTimeout(() => {

      CommonService.httpPostRequestBody(`http://103.206.139.86:5000/api/v1/users/login`, JSON.stringify({email,password}), false)
      .then((response) => {
        console.log("sign in");
        if (response) {
          console.log(response.data.data.user);
          console.log("Successfully Login");
          localStorage.setItem('user', JSON.stringify(response.data.data.user));
          localStorage.setItem('token', JSON.stringify(response.data.token));
          console.log(response.data.token)
  
        }
      })
        navigate("/")
    }, 3000);
};
  return (
    <>
      <Box
        component="form"
        sx={{ m: 1 }}
        id="login-form"
        noValidate
        onSubmit={handleSubmit}
        style={{ marginRight: "3rem" }}
      >
        <TextField
          required
          fullWidth
          id="email"
          type="email"
          name="email"
          label="Email Address"
          style={{ marginTop: "2rem" }}
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
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
        <NavLink to="/sendpasswordresetemail">Forget Password</NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default Login;
