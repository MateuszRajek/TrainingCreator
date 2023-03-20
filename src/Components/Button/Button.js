import React from "react";

function Button({ type, text, size, color, onClick }) {
  return (
    <>
      <button className={`btn btn--${size} btn--${color}`} type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Button;

