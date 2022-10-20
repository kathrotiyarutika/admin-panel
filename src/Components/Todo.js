import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = (props) => {
  const [line, setLine] = useState(false);

  const handleClick = () => {
    setLine(true);
  };

  return (
    <div className="todo_style">
      <span onClick={handleClick}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default Todo;
