/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Cards = (props) => {
  const { src, title, series, link } = props;

  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={src} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{title}</span>
            <h3 className="card_title"> {series} </h3>
            <a href={link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
