import React, { useState } from 'react';
import './Input.sass';

function Input({id, type, placeholder, hooksprop}) {
// const [inputValue, setInputValue] = useState(value)

  return (
    <>
      <input {...{ id, type, placeholder, hooksprop}}></input>
    </>
  );
}

export default Input;
