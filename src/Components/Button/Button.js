import React from 'react';
import './Button.sass';

function Button({ type, text, size, color }) {

  return (
    <>
      <button className={`btn btn--${size} btn--${color}`} type={type} >{text}</button>
    </>
  );
}

export default Button;
