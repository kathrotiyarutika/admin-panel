import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";
import { Tooltip } from "@mui/material";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const handleEvent = (e) => {
    e.preventDefault();
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add an Item..."
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={handleEvent}>
            <Tooltip title="Add">
              <AddIcon />
            </Tooltip>
          </Button>
          <br />
          <ol>
            {newItem.map((value, index) => {
              return <Todo key={index} text={value} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default TodoList;
