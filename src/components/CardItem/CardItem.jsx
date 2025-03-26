import React from "react";

const CardItem = ({ card }) => {
  return (
    <div>
      {card ? (
        <div className="cardItem">
          <img src={card.largeImageURL} alt="" />

          <p className="user ">Photo by {card.user}</p>

          <div className="main">
            <p>
              <b>Views:</b> {card.views}{" "}
            </p>
            <p>
              <b>Downloads:</b> {card.downloads}
            </p>
            <p>
              <b>Likes:</b>
              {card.likes}
            </p>
          </div>

          <div className="tags">
            {card.tags.split(", ").slice(0, 3).join(" ")}
          </div>
        </div>
      ) : (
        <div>data not Found</div>
      )}
    </div>
  );
};
export default CardItem;
