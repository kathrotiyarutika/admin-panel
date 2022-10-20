import React, { useState } from "react";

const Hooks = () => {
  const newTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(newTime);
  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
//   setInterval(updateTime, 1000);
//   setTimeout(updateTime)
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{time}</h1>
      <button onClick={updateTime} style={{ marginLeft: "47%" }}>
        Get Time
      </button>
    </>
  );
};

export default Hooks;
