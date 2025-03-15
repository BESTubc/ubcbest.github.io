import React from "react";

const Button = (props) => {
  return (
    <button className={props.mode}> {props.title} </button>
  );
};

export default Button;