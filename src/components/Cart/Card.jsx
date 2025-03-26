import React from "react";
import CardItem from "../CardItem/CardItem";

const Card = ({ data }) => {
  return (
    <div className="card">
      {data.length > 0 ? (
        data.map((card, index) => {
          return <CardItem key={index} card={card} />;
        })
      ) : (
        <div>404 Not Found</div>
      )}
    </div>
  );
};

export default Card;
