import React from 'react';
import './Input.sass';

function Input({id, type, placeholder, register, label}) {

  return (
    <>
      <input {...{ id, type, placeholder, ...register(label)}} />
    </>
  );
}

export default Input;
