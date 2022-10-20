import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const List = () => {
  const [state, setState] = useState(0);

  const incNum = () => {
    console.log(state);
    setState(state + 1);
  };

  const decNum = () => {
    console.log(state)
    setState(state - 1);
  };

  const clearNum = () => {
    console.log(state)
    setState(0);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 style={{ fontSize: "18px", marginTop: "10px" }}>
            Increment/Decrement
          </h1>
          <h1> {state} </h1>
          <div className="btn_div">
            <Tooltip title="Add" placement="bottom-end" arrow>
              <Button
                onClick={incNum}
                className="btn_green"
                style={{ marginBottom: "12px" }}
              >
                <AddIcon />
              </Button>
            </Tooltip>

            <Tooltip title="remove" placement="bottom-end" arrow>
              <Button
                onClick={decNum}
                className="btn_red"
                style={{ marginBottom: "12px" }}
              >
                <RemoveIcon />
              </Button>
            </Tooltip>

            <Tooltip title="clear" placement="bottom-end" arrow>
              <Button
                onClick={clearNum}
                className="btn_blue"
                style={{ marginBottom: "12px" }}
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
