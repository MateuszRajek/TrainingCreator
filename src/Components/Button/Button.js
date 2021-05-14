import React from 'react';
import './_Button.sass';

function Button({ type, text, size, color, onClick }) {

  return (
    <>
      <button className={`btn btn--${size} btn--${color}`} type={type} onClick={onClick}>{text}</button>
    </>
  );
}

export default Button;
