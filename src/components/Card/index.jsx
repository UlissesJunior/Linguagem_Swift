import React from "react";

function Card({ text, Image }) {
  return (
    <div className="card">
      <div className="image"> <img src={Image} /></div>
      <div className="text">{text}</div>
    </div>
  );
}

export default Card;
