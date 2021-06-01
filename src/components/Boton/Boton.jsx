import React from "react";
import "./Boton.css";

export default function Boton(props) {
  return (
    <div className="boton-main">
      <input type={props.type} value={props.value} />
    </div>
  );
}
