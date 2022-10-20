import React from "react";

const Slotgame = (props) => {
  const { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
        <br/>
          <h1>
            {x} {y} {z}
          </h1>
          <br />
          <h3>This is matching.</h3>
          <br />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <br />
          <h3>This is Not matching.</h3>
          <br />
        </div>
      </>
    );
  }
};
export default Slotgame;
