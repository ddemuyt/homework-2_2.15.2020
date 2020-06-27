import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `src(${props.image})` : "none"
      }}
    >
      <img src={props.image} alt={props.name} style={{height: 200}}/>
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        href={props.href}
        name={props.name}
      />
    </div>
  );
}

export default Card;
