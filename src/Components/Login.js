import { Button, Paper, TextField, Tooltip } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React, { useState } from "react";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [DataStore, setDataStore] = useState([]);
  const submitBtn = () => {
    const DataToStore = { Username, Password };
    console.log("Username", Username);
    console.log("password", Password);
    if (Username && Password) {
      setDataStore((preVal) => {
        return [...preVal, DataToStore];
      });
      console.log("DataStore", DataToStore);
      setUsername("");
      setPassword("");
    } else {
      alert("fill the data");
    }
  };
  return (
    <div className="main_container">
      <Paper elevation={15}>
        <div className="from_container">
          <h1>Login</h1>
          <TextField
            className="input"
            id="standard-password-input"
            label="Username"
            type="text"
            autoComplete="current-password"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="input input_2"
            id="standard-password-input"
            label="Password"
            type="Password"
            autoComplete="current-password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={submitBtn} variant="contained" color="secondary">
            <Tooltip title="Login">
              <LoginIcon />
            </Tooltip>
          </Button>
        </div>
        <div className="ListContainer">
          {DataStore.map((arrData, index) => {
            const { Username, Password } = arrData;
            return (
              <div key={index}>
                <div className="ListStyle">
                  <p>{Username}</p>
                  <p>{Password}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

export default Login;
