/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React from "react";

const curDate = new Date().getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning⛅";
  cssStyle.color = "Green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon🌞";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night🌚";
  cssStyle.color = "Black";
}

// curDate >= 1 && curDate < 12
//   ? (greeting = "good morning")
//   : curDate > 12 && curDate < 19
//   ? (greeting = "good afternoon")
//   : (greeting = "goodNight");
const Task = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
      <h1 style={{ textAlign: "center" }}>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  );
};

export default Task;
