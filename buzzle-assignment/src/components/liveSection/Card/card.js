import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card-component">
      <div className="card-component-cover">
        <div className="card-live">Live</div>
        <img
          src={props.image}
          alt="logo"
          className="card-logo"
          height={30}
          width={30}
        />
        <img
          src={props.logo}
          alt={props.name}
          className="card-component-image"
        />
        <div className="card-viewers">{props.viewers}</div>
        <div className="card-ellipsis">
          <div className="card-title">{props.title}</div>
          <div className="ellipsis">
            <i class="fi fi-br-menu-dots-vertical"></i>
          </div>
        </div>
        <div className="card-name">{props.name}</div>
        <div className="card-time">
          <i class="fi fi-sr-clock timer"></i>
          <div className="time">{props.time}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
