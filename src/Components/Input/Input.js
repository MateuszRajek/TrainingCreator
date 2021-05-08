import React from 'react';
import './Input.sass';

function Input({id, type, register, text, className, icon}) {

  return (
    <>
      <label htmlFor={id}>{text}</label>
      <div className='input__wrapper'>
        {icon && <div className='input__icon'><img src={icon} alt={`${id}-icon`}/></div>}
        <input {...{ id, type, placeholder:text, ...register(id), className: `input ${className}`}} />
      </div>
      
    </>
  );
}

export default Input;
